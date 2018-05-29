import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService, ModalType } from 'app/services/modal-service';
import { IncidentService, 
    GenericIncidentAction, 
    IncidentAction, 
    INCIDENT_ADDED 
} from 'app/services/incident-service';
import { PersonService } from 'app/services/person-service';

import { Subscription } from 'rxjs';
import { SecurityService } from 'app/services/security-service';
import { filter } from 'rxjs/operators';
import { Result } from 'app/shared/models/result';

@Component({
  selector: 'current-activities',
  templateUrl: './current-activities.component.html',
  styleUrls: ['./current-activities.scss'],
})
export class CurrentActivitiesComponent implements OnInit, OnDestroy {    
    activities: any = [];
    @Input() branch = 0;        

    private subscriber : Subscription;

    constructor(private incidentService: IncidentService, 
      private modalService: ModalService, 
      private personService: PersonService,
      private securityService: SecurityService) {

    }  

    ngOnInit() {
      this.securityService.getCurrentUserData().subscribe((user) => {
        this.branch = user.default_branch_id || 0;
        this.getCurrentActivities();
      });      

      this.subscriber = this.incidentService.incidentsActions$
      .pipe(
        filter((ev:GenericIncidentAction) => ev.payload != null),
        filter((ev:GenericIncidentAction) => !this.branch || ev.payload.branch_id == this.branch),
        filter((ev:GenericIncidentAction) => ev.type == INCIDENT_ADDED)
      ) 
      .subscribe((data) => {
        this.getCurrentActivities();  
      });
    }

    ngOnDestroy() {      
        if(this.subscriber) {
          this.subscriber.unsubscribe();
        }
    }

    show_incident_details(incident) {
        this.modalService.open(ModalType.IncidentTreatment, incident);
    }

    filter_activities(branch) {
      this.branch = branch;
      this.getCurrentActivities();
    }

    private getCurrentActivities() {      
      this.incidentService.getCurrentActivities(this.branch || 0).subscribe((result : Result) => {
        this.activities = result.data;
      });      
    }

    start_incident(incident) {      
      this.incidentService.start_incident(incident)
      .subscribe();
    }
  
    close_incident(incident) {      
      this.incidentService.close_incident(incident)
      .subscribe(); 
    }
}