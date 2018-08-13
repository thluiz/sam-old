import { LightIncident } from 'app/shared/models/incident-model';

import { zip as observableZip } from 'rxjs';
import { UtilsService } from 'app/services/utils-service';
import { ModalType } from './../../../services/modal-service';
import { ModalService } from 'app/services/modal-service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, ElementRef, ViewChild } from '@angular/core';

import { DatePickerI18n, NgbDatePTParserFormatter, PortugueseDatepicker } from 'app/shared/datepicker-i18n';

import { ParameterService } from 'app/services/parameter-service';
import { PersonService } from 'app/services/person-service';

import { NgbDateParserFormatter, NgbDatepickerI18n, NgbDatepickerConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';
import { Result } from 'app/shared/models/result';

@Component({
  selector: 'new-person-modal',
  templateUrl: './new-person-modal.component.html',
  styleUrls: ['../../../../assets/customizations.scss'],
  providers: [DatePickerI18n,
    { provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter },
    { provide: NgbDatepickerI18n, useClass: PortugueseDatepicker }]
})

export class NewPersonModalComponent implements OnInit {
  branches = [];
  incident_types = [];
  roles = [];
  person: any = {};
  modalRef: NgbModalRef;
  saving = false;

  @ViewChild('add_person_modal') add_person_modal: ElementRef;

  constructor(
    private datePickerConfig: NgbDatepickerConfig,
    private ngbModalService: NgbModal,
    private personService: PersonService,
    private parameterService: ParameterService,
    private modalService: ModalService,
    private utilsService: UtilsService
  ) {
    this.datePickerConfig.firstDayOfWeek = 7
  }

  ngOnInit() {
    this.reset_person({});
  }

  open(initial_state = {}) {
    this.saving = false;
    this.reset_person(initial_state);
    observableZip(
      this.parameterService.getActiveBranches(),
      this.parameterService.getRoles(),
      this.parameterService.getIncidentTypes(),
      (result_branches: Result<any[]>,
        result_roles: Result<any[]>,
        result_incident_types: Result<any[]>) => {

        this.branches = result_branches.data;
        this.roles = result_roles.data.filter(r => r.allowed_for_new_person);
        this.incident_types = result_incident_types.data.filter(i => i.allowed_for_new_person);

        this.open_modal(this.add_person_modal, true);
      }
    ).subscribe();
  }

  validate_new_person() {
    this.person.is_valid = true;
    this.person.validation = [];

    if (!this.person.branch_id || +this.person.branch_id <= 0) {
      this.person.is_valid = false;
      this.person.validation[this.person.validation] = "Defina o núcleo";
    }

    if (!this.person.role_id || +this.person.role_id <= 0) {
      this.person.is_valid = false;
      this.person.validation[this.person.validation.length] = "Defina o tipo de cadastro";
    }

    if (!this.person.name || this.person.name.length <= 5) {
      this.person.is_valid = false;
      this.person.validation[this.person.validation.length] = "Informe o nome da pessoa";
    }

    if (!this.person.initial_contact || this.person.initial_contact.length <= 5) {
      this.person.is_valid = false;
      this.person.validation[this.person.validation.length] = "Informe como foi o contato inicial";
    }

    if (this.person.role_id == 4) {
      if (!this.person.next_incident_type || this.person.next_incident_type <= 0) {
        this.person.is_valid = false;
        this.person.validation[this.person.validation.length] = "Qual a próxima atividade da pessoa?";
      } else {
        if (!this.person.next_incident_dt) {
          this.person.is_valid = false;
          this.person.validation[this.person.validation.length] = "Informe a data da atividade";
        }

        if (!this.person.next_incident_time) {
          this.person.is_valid = false;
          this.person.validation[this.person.validation.length] = "Informe o horário da atividade";
        }
      }
    }
  }

  register_new_person() {
    this.saving = true;
    this.person.birth_date = this.utilsService.translate_date_to_server(this.person.birth_date_tmp);
    this.person.next_incident_date = this.utilsService.translate_date_time_to_server(
      this.person.next_incident_dt, this.person.next_incident_time
    );

    this.personService.registerPerson(this.person).subscribe((data: LightIncident) => {
      this.modalRef.close(data);
      this.saving = false;
      this.modalService.open(ModalType.PersonTreatment, { person_id: data.person_id });
    });
  }

  private reset_person(initial_state: any = {}) {
    let date = new Date();
    this.person = {
      branch_id: initial_state.branch_id,
      next_incident_dt: {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      }
    };
  }

  private open_modal(content, on_close_action = false) {
    this.saving = false;
    this.modalRef = this.ngbModalService.open(content);

    this.modalRef.result.then((result) => {

    }, (reason) => {
      console.log(reason);
    });
  }
}
