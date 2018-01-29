import { SecurityService } from './../../services/security-service';
import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";

declare var $: any;
@Component({
    // moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private router: Router,
        private route: ActivatedRoute, 
        private securityService: SecurityService
        ) {
    }

    ngOnInit() {        
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = ROUTES;
    }

}
