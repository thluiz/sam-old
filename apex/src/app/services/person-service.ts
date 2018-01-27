import { IContact } from './person-service';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';

export enum DailyMonitorDisplayType {
    Week = 0,
    Day = 1,
    Month = 2,
    Agenda = 3,
    Current = 4
}

export interface IContact {
  person_id: number;
  contact_type :number;
  contact :string;
  details :string;
}

@Injectable()
export class PersonService {  
  private dataUrl = environment.api_url;    

  private contact_changes = new Subject<IContact>();
  contactChanges$ = this.contact_changes.asObservable();  

  private person_changes = new Subject<any>();
  personChanges$  = this.person_changes.asObservable();  

  private comment_changes = new Subject<any>();
  commentChanges$  = this.comment_changes.asObservable();  

  constructor(private http:Http) { }  
  
  getDailyAgenda(branch, date: any) {
    return this.http.get(this.dataUrl + `/agenda/${branch || 0}/${date.year}-${date.month}-${date.day}`);    
  }

  getDailyMonitor(branch, display : DailyMonitorDisplayType, display_modifier: number) {
    return this.http.get(this.dataUrl + `/daily/${branch || 0}/${display}/${display_modifier}`);    
  }  

  getPeopleSummary(branche, week) {
    return this.http.get(this.dataUrl + `/people_summary/${branche || 0}/${week}`);    
  }  

  getMembersList() {
    return this.http.get(this.dataUrl + `/people/members`);    
  }

  getPeopleList() {
    return this.http.get(this.dataUrl + `/people`);    
  }

  getPersonContacts(person_id, only_principal = false) {
    return this.http.get(this.dataUrl + `/person_contact/person/${person_id}/${only_principal ? 1 : 0}`);    
  }
  getPersonMissingData(person_id) {
    return this.http.get(this.dataUrl + `/person/missing_data/${person_id}`);    
  }

  savePersonContact(person_id, contact_type, contact, details, principal) {
    const contact_data = {
      person_id, 
      contact_type, 
      contact,
      details,
      principal
    };

    return this.http.post(this.dataUrl + `/person_contact`, contact_data).do((d) => {
      this.contact_changes.next(contact_data);
    });    
  }

  savePersonData(person) {          
    return this.http
        .post(this.dataUrl + `/people`, {
          person
        }).do((data) => {          
          this.person_changes.next(data.json())
        });
  }

  removePersonContact(person_id, contact_id) {
    return this.http.post(this.dataUrl + `/person_contact/remove`, {
      contact_id
    }).do((data) => {
      this.contact_changes.next({ person_id } as IContact);
    });    
  }

  getData(id) {    
    return this.http
        .get(this.dataUrl + `/people/${id}`);
  }

  getPersonRoles(id) {    
    return this.http
        .get(this.dataUrl + `/person_role/person/${id}`);
  }

  getPersonScheduling(id) {    
    return this.http
        .get(this.dataUrl + `/person_schedule/person/${id}`);
  }

  addRole(person_id, role_id) {
    return this.http
        .post(this.dataUrl + `/person_role`, {
          person_id, role_id
        });
  }

  removeRole(person_id, role_id) {
    return this.http
        .post(this.dataUrl + `/person_role/delete`, {
          person_id, role_id
        });
  }
  
  saveKFName(person_id, kf_name, ideograms) {
    return this.http
        .post(this.dataUrl + `/people_alias/kf_name`, {
          person_id, 
          kf_name,
          ideograms
        });
  }

  search(name) {    
    return this.http
        .get(this.dataUrl + `/people/search/${name}`);
  }

  remove_schedule(schedule) {
    return this.http
        .post(this.dataUrl + `/person_schedule/delete`, {
          id: schedule.id
        });
  }

  save_schedule(schedule) {
    return this.http
        .post(this.dataUrl + `/person_schedule`, {
          schedule
        });
  }

  getCommentsAboutPerson(person_id) {
    return this.http.get(this.dataUrl + `/people_comments/about/${person_id}`); 
  }

  archiveComment(comment, person) {
    return this.http
        .post(this.dataUrl + `/people_comments/archive`, {
          id: comment.id
        }).do((data) => {          
          this.comment_changes.next({ person });
        });
  }

  saveCommentAboutPerson(person, comment) {    
    return this.http
        .post(this.dataUrl + `/people_comments/about`, {
          person_id: person.id,
          comment
        }).do((data) => {          
          this.comment_changes.next({ person });
        });
  }
}

