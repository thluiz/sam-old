import { PersonStatusLineModule } from './../person-status-line/person-status-line.module';
import { RouterModule } from '@angular/router';
import { PersonCardComponent } from './person-card.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        PersonStatusLineModule        
    ],
    declarations: [       
        PersonCardComponent
    ], exports: [
        PersonCardComponent
    ]
})
export class PersonCardModule { }
