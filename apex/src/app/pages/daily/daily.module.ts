import { PersonDataTreatmentModalModule } from 'app/shared/components/person-data-treatment-modal/person-data-treatment-modal.module';
import { CompactIncidentListitemModule } from './../../shared/components/compact-incident-listitem/compact-incident-listitem.module';
import { IncidentTreatmentModalModule } from './../../shared/components/incident-treatment-modal/incident-treatment-modal.module';
import { NewIncidentModalModule } from './../../shared/components/new-incident-modal/new-incident-modal.module';
import { PersonCardModule } from './../../shared/components/person-card/person-card.module';
import { DailyChangeViewModule } from './shared/change-view/change-view.module';
import { PersonStatusLineModule } from 'app/shared/components/person-status-line/person-status-line.module';

import { DailyRoutingModule } from './daily-routing.module';

import { AgendaPageComponent } from './agenda-page/agenda-page.component';
import { DailyPageComponent } from './daily-page/daily-page.component';
import { WeeklyPageComponent } from './weekly-page/weekly-page.component';
import { SumaryPageComponent } from './sumary-page/sumary-page.component';

import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormControl, FormsModule, ReactiveFormsModule,
        FormGroup, Validators, NgForm } from '@angular/forms';

import { NgbModal, 
    NgbDateStruct, 
    NgbDatepickerI18n, 
    NgbDatepickerModule,
    NgbCalendar, 
    NgbTimeStruct,      
    ModalDismissReasons, 
    NgbTimepickerModule,
    NgbActiveModal,
    NgbModule     
  } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
    imports: [
        CommonModule,
        DailyRoutingModule,                
        FormsModule, 
        ReactiveFormsModule,                        
        NgbDatepickerModule.forRoot(),
        NgbTimepickerModule.forRoot(),
        NgbModule,        
        DailyChangeViewModule,
        PersonCardModule,
        NewIncidentModalModule,
        IncidentTreatmentModalModule,
        CompactIncidentListitemModule,
        PersonStatusLineModule,
        PersonDataTreatmentModalModule,
        MarkdownModule.forRoot()
    ],
    declarations: [       
        DailyPageComponent,
        WeeklyPageComponent,
        AgendaPageComponent,
        SumaryPageComponent
    ]
})
export class DailyModule { }
