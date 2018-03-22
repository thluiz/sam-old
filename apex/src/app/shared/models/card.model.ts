import { Group } from './group.model';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { CardStep } from './card-step.model';
import { Location } from './location.model';

export class Card {
    id: number;
    template: { id: number, name: string, is_task: boolean, require_target: boolean, require_target_group: boolean };
    template_id: number;
    title: string;    
    parent: Card;
    parent_id: number;
    parent_title: string;
    high_level_id: number;
    high_level_title: string;
    high_level_abrev: string;
    due_date: NgbDateStruct;
    due_time: NgbTimeStruct;
    due_date_formated: string;
    due_time_formated: string;
    abrev: string;
    order: number;
    leaders: any[];
    parent_leaders: any[];
    people: any[];
    locations: Location[];
    location_id: number;
    description: string;
    childrens: Card[];     
    steps: CardStep[]; 
    is_task: boolean; 
    steps_description: { id: number, name: string, is_blocking_step : boolean, childrens: number, order: number }[];
    tmp_person: any;
    is_subproject: boolean;
    group: Group;
    branch: { id: number, name: string }
    comment_count: number;
    archived: boolean;
    has_overdue_card: boolean;    
    current_step_id: number;
    current_step: string;
    organization_id: number;
}