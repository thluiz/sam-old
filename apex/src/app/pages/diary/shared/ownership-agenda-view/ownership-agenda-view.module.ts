import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { OwnershipAgendaViewComponent } from './ownership-agenda-view.component';
import { IncidentAgendaListitemModule } from 'app/shared/components/incident-agenda-listitem/incident-agenda-listitem.module';
import { MarkdownModule } from 'ngx-markdown';
import { IncidentCommentListModule } from 'app/shared/components/incident-comment-list/incident-comment-list.module';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IncidentAgendaListitemModule,
        MarkdownModule.forRoot(),
        IncidentCommentListModule,
        NgPipesModule
    ],
    declarations: [
        OwnershipAgendaViewComponent
    ], exports: [
        OwnershipAgendaViewComponent
    ]
})
export class OwnershipAgendaViewModule { }
