import { ApplicationPipesModule } from 'app/app-pipes.module';
import { RouterModule } from '@angular/router';
import { IncidentCommentsListModalComponent } from './incident-comments-list-modal.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MarkdownModule } from 'ngx-markdown';
import { NgPipesModule } from 'ngx-pipes';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MarkdownModule.forRoot(),
        ApplicationPipesModule,
        NgPipesModule
    ],
    declarations: [
        IncidentCommentsListModalComponent
    ], exports: [
        IncidentCommentsListModalComponent
    ]
})
export class IncidentCommentsListModalModule { }
