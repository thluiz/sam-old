import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonService } from 'app/services/person-service';
import { NgbDateParserFormatter, NgbDatepickerI18n, NgbModal, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerI18n, NgbDatePTParserFormatter, PortugueseDatepicker } from 'app/shared/datepicker-i18n';
import { ActivatedRoute, Router } from '@angular/router';
import { ParameterService } from 'app/services/parameter-service';
import { SecurityService } from 'app/services/security-service';
import { Result } from 'app/shared/models/result';

@Component({
  selector: 'app-full-layout-page',
  templateUrl: './people-service-provider-page.component.html',
  styleUrls: ['../people-customizations.scss'],
  providers: [DatePickerI18n,
    {provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter},
    {provide: NgbDatepickerI18n, useClass: PortugueseDatepicker}]
})
export class PeopleServiceProviderPageComponent implements OnInit, OnDestroy {
  people: any;
  all_people: any;
  current_view = 0;
  filters = "1";
  current_branch = 0;
  branches: any;
  search_name = "";

  private person_list_sub: Subscription;

  constructor(
    private personService: PersonService,
    private securityService: SecurityService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private parameterService: ParameterService,
    private datePickerConfig: NgbDatepickerConfig) {

  }

  ngOnInit() {
    this.search_name = this.activatedRoute.snapshot.queryParams["name"] || "";

    this.parameterService.getActiveBranches()
    .subscribe((result_data) => {
      this.branches = result_data.data;
    });

    this.securityService.getCurrentUserData()
    .subscribe((result_data : Result<any>) => {
      this.current_branch = this.activatedRoute.snapshot.queryParams["branch"]
                            || result_data.data.default_branch_id || 0;
    });

    this.load_service_provider_list();
  }

  ngOnDestroy() {
    if(this.person_list_sub) {
      this.person_list_sub.unsubscribe();
    }
  }

  apply_filters() {
    let people = this.all_people;


    if(this.current_branch > 0) {
      people = people.filter((p : any) => {
        return p.branch_id == this.current_branch;
      });
    }

    this.people = people;
  }

  filter_people() {
    this.router.navigateByUrl(`people/service_provider?branch=${this.current_branch}&name=${this.search_name}`);
    this.load_service_provider_list();
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.filter_people();
    }
  }

  load_service_provider_list() {
    if(this.person_list_sub) {
      this.person_list_sub.unsubscribe();
    }

    this.person_list_sub = this.personService.getServiceProvidersList(this.current_branch, this.search_name).subscribe(
      (result : Result<any[]>) => {
        this.all_people = result.data;

        this.apply_filters();
      }
    );
  }
}
