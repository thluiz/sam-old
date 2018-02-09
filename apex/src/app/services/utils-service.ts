import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UtilsService {
    private dataUrl = environment.api_url;    

    constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }

    translate_date_to_server(date) {
        if(!date || !date.year)
            return null;

        return `${date.year}-${date.month}-${date.day}`;
    }

    translate_date_time_to_server(date, time) {        
        if(!date || !date.year || !time)
            return null;

        return `${date.year}-${date.month}-${date.day} ${time.hour}:${time.minute}`;
    }

    sanitize(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }    

    cache_results(observable : ReplaySubject<any>, endpoint:string, forceRefresh?: boolean) {
        if (!observable.observers.length || forceRefresh) {        
            this.http.get(this.dataUrl + endpoint)
            .subscribe(
                data => observable.next(data),
                error => {
                    observable.error(error);
                    // Recreate the Observable as after Error we cannot emit data anymore
                    observable = new ReplaySubject(1);
                }
            );
        }

        return observable;
    }
}

