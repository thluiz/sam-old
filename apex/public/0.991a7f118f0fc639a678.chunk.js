webpackJsonp([0],{"829k":function(l,n,t){"use strict";t.d(n,"a",function(){return u});var e=t("eU3z"),u=(t("HoTs"),function(){function l(l,n,t,e){this.route=l,this.router=n,this.modalService=t,this.personService=e}return l.prototype.ngOnInit=function(){var l=this;this.person_changes_subscriber=this.personService.personChanges$.filter(function(n){return n.id==l.person.id}).subscribe(function(n){console.log(n),l.person=n})},l.prototype.ngOnDestroy=function(){this.person_changes_subscriber.unsubscribe()},l.prototype.begin_person_data_treatment=function(){this.modalService.open(e.b.PersonTreatment,this.person)},l}())},EHc2:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){}},HXjV:function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){}},guJZ:function(l,n,t){"use strict";t.d(n,"a",function(){return i}),n.b=function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,16,"div",[["class","col-12 d-none d-xl-block pl-1"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["                                \n\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,r)),e["\u0275did"](3,16384,null,0,u.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,o)),e["\u0275did"](6,16384,null,0,u.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,s)),e["\u0275did"](9,16384,null,0,u.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\t\n\t"])),(l()(),e["\u0275eld"](11,0,null,null,4,"div",[["class","pr-1"],["style","float:right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\n\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,a)),e["\u0275did"](14,16384,null,0,u.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](18,0,null,null,16,"div",[["class","col-12 d-block d-xl-none"],["style","line-height:10px"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["                                \n\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,d)),e["\u0275did"](21,16384,null,0,u.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](24,16384,null,0,u.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](27,16384,null,0,u.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\t\n\t"])),(l()(),e["\u0275eld"](29,0,null,null,4,"div",[["class","pr-1"],["style","float:right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](32,16384,null,0,u.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var t=n.component;l(n,3,0,t.person.scheduling_status>0),l(n,6,0,t.person.financial_status>0),l(n,9,0,1==t.person.data_status),l(n,14,0,t.person.has_birthday_this_month),l(n,21,0,t.person.scheduling_status>0),l(n,24,0,t.person.financial_status>0),l(n,27,0,1==t.person.data_status),l(n,32,0,t.person.has_birthday_this_month)},null)};var e=t("LMZF"),u=t("Un6q"),i=(t("eU3z"),t("HoTs"),e["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function r(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],[[8,"title",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](2,0,null,null,0,"i",[["class","ft-calendar"],["style","color:red"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t"]))],null,function(l,n){l(n,0,0,n.component.person.scheduling_description)})}function o(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](2,0,null,null,0,"i",[["class","icon-wallet"],["style","color:red"]],[[8,"title",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t"]))],null,function(l,n){l(n,2,0,n.component.person.financial_description)})}function s(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[["style","cursor:pointer"]],[[8,"title",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.begin_person_data_treatment()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t"])),(l()(),e["\u0275eld"](2,0,null,null,0,"i",[["class","fas fa-user"],["style","color:red"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t"]))],null,function(l,n){l(n,0,0,n.component.person.data_status_description)})}function a(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"i",[["class","icon-present"],["title","Aniversariante do m\xeas"]],[[4,"color",null]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"]))],null,function(l,n){l(n,0,0,"silver")})}function d(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],[[8,"title",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](2,0,null,null,0,"i",[["class","ft-calendar"],["style","color:red"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t"]))],null,function(l,n){l(n,0,0,n.component.person.scheduling_description)})}function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[],[[8,"title",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](2,0,null,null,0,"i",[["class","icon-wallet"],["style","color:red"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t"]))],null,function(l,n){l(n,0,0,n.component.person.financial_description)})}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"span",[["style","cursor:pointer"]],[[8,"title",0]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.begin_person_data_treatment()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t"])),(l()(),e["\u0275eld"](2,0,null,null,0,"i",[["class","fas fa-user"],["style","color:red"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t"]))],null,function(l,n){l(n,0,0,n.component.person.data_status_description)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"i",[["class","icon-present"],["title","Aniversariante do m\xeas"]],[[4,"color",null]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"]))],null,function(l,n){l(n,0,0,"silver")})}},ncKm:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var e=t("LMZF"),u=function(){function l(l,n){this.route=l,this.router=n,this.onBeginPersonDataTreatment=new e.EventEmitter}return l.prototype.ngOnInit=function(){},l.prototype.begin_person_data_treatment=function(){this.onBeginPersonDataTreatment.emit(this.person)},l}()},wQAX:function(l,n,t){"use strict";t.d(n,"a",function(){return d}),n.b=function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,65,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275eld"](2,0,null,null,7,"div",[["class","col-3 d-none d-xl-block text-right"],["style","padding-right:0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](5,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t\t\n\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](8,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,[" \n\t"])),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\n\t"])),(l()(),e["\u0275eld"](11,0,null,null,53,"div",[["class","col-9 col-md-12 col-lg-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](13,0,null,null,22,"div",[["class","row"],["style","cursor:pointer;"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,14).onClick()&&u),u},null,null)),e["\u0275did"](14,16384,null,0,u.l,[u.k,u.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](15,2),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](17,0,null,null,6,"div",[["class","col-12 d-block d-xl-none"]],[[4,"color",null]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275eld"](19,0,null,null,3,"a",[],[[4,"color",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,20).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](20,671744,null,0,u.n,[u.k,u.a,i.h],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](21,2),(l()(),e["\u0275ted"](22,null,["\n\t\t\t\t","\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t"])),(l()(),e["\u0275eld"](25,0,null,null,9,"div",[["class","col-12 d-none d-xl-block pl-1"]],[[4,"color",null]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275eld"](27,0,null,null,3,"a",[],[[4,"color",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,28).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e["\u0275did"](28,671744,null,0,u.n,[u.k,u.a,i.h],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](29,2),(l()(),e["\u0275ted"](30,null,["\n\t\t\t\t","\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](33,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t"])),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t"])),(l()(),e["\u0275eld"](37,0,null,null,19,"div",[["class","row"],["style","font-size:12px;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\t\t\t\n\t\t\t"])),(l()(),e["\u0275eld"](39,0,null,null,4,"div",[["class","col-12 d-block d-xl-none"]],[[4,"color",null]],null,null,null,null)),(l()(),e["\u0275ted"](40,null,["\n\t\t\t\t"," "])),(l()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](42,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](45,0,null,null,10,"div",[["class","col-12 d-none d-xl-block pl-1"]],[[4,"color",null]],null,null,null,null)),(l()(),e["\u0275ted"](46,null,["\n\t\t\t\t",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](48,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](51,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\n\t\t\t\t"])),(l()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](54,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275eld"](58,0,null,null,5,"div",[["class","row"],["style","line-height:10px"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275eld"](60,0,null,null,2,"person-status-line",[],null,[[null,"onBeginPersonDataTreatment"]],function(l,n,t){var e=!0;return"onBeginPersonDataTreatment"===n&&(e=!1!==l.component.begin_person_data_treatment()&&e),e},r.b,r.a)),e["\u0275did"](61,245760,null,0,o.a,[u.a,u.k,s.a,a.b],{person:[0,"person"]},null),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t\t"])),(l()(),e["\u0275ted"](-1,null,["\n\t"])),(l()(),e["\u0275ted"](-1,null,["\t\n"]))],function(l,n){var t=n.component;l(n,5,0,t.person.avatar_img&&t.person.avatar_img.length>0),l(n,8,0,!t.person.avatar_img||t.person.avatar_img.length<=0),l(n,14,0,l(n,15,0,"/people/person",t.person.id||t.person.person_id)),l(n,20,0,l(n,21,0,"/people/person",t.person.id||t.person.person_id)),l(n,28,0,l(n,29,0,"/people/person",t.person.id||t.person.person_id)),l(n,33,0,t.person.kf_name_ideograms),l(n,42,0,t.person.family_name),l(n,48,0,t.person.family_name),l(n,51,0,!t.person.admission_date&&t.person.family_name),l(n,54,0,t.person.kf_name),l(n,61,0,t.person)},function(l,n){var t=n.component;l(n,17,0,t.person.is_leaving||t.person.is_inactive_member?"grey":"black"),l(n,19,0,t.person.is_leaving||t.person.is_inactive_member?"grey":"black",e["\u0275nov"](n,20).target,e["\u0275nov"](n,20).href),l(n,22,0,t.person.name),l(n,25,0,t.person.is_leaving||t.person.is_inactive_member?"grey":"black"),l(n,27,0,t.person.is_leaving||t.person.is_inactive_member?"grey":"black",e["\u0275nov"](n,28).target,e["\u0275nov"](n,28).href),l(n,30,0,t.person.name),l(n,39,0,t.person.is_leaving||t.person.is_inactive_member?"grey":"black"),l(n,40,0,t.person.branch_initials),l(n,45,0,t.person.is_leaving||t.person.is_inactive_member?"grey":"black"),l(n,46,0,t.person.branch_initials)})};var e=t("LMZF"),u=t("UHIZ"),i=t("Un6q"),r=t("guJZ"),o=t("829k"),s=t("eU3z"),a=t("HoTs"),d=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"img",[["class","img-border"],["style","width:100%;cursor:pointer"]],[[8,"alt",0],[8,"src",4],[4,"border-color",null],[4,"opacity",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,1).onClick()&&u),u},null,null)),e["\u0275did"](1,16384,null,0,u.l,[u.k,u.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,2)],function(l,n){var t=n.component;l(n,1,0,l(n,2,0,"/people/person",t.person.id||t.person.person_id))},function(l,n){var t=n.component;l(n,0,0,e["\u0275inlineInterpolate"](1,"",t.person.name,""),e["\u0275inlineInterpolate"](1,"https://myvtmiim.blob.core.windows.net/avatars/",t.person.avatar_img,""),t.person.is_leaving||t.person.is_inactive_member?"orange":null,t.person.is_leaving||t.person.is_inactive_member?"0.5":null)})}function p(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"img",[["class","img-border"],["src","/assets/img/portrait/avatars/avatar-08.png"],["style","width:100%;cursor:pointer"]],[[4,"border-color",null],[4,"opacity",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e["\u0275nov"](l,1).onClick()&&u),u},null,null)),e["\u0275did"](1,16384,null,0,u.l,[u.k,u.a,[8,null],e.Renderer2,e.ElementRef],{routerLink:[0,"routerLink"]},null),e["\u0275pad"](2,2)],function(l,n){var t=n.component;l(n,1,0,l(n,2,0,"/people/person",t.person.id||t.person.person_id))},function(l,n){var t=n.component;l(n,0,0,t.person.is_leaving||t.person.is_inactive_member?"orange":null,t.person.is_leaving||t.person.is_inactive_member?"0.5":null)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["style","float:right;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t","\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t"]))],null,function(l,n){l(n,1,0,n.component.person.kf_name_ideograms)})}function m(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[", ",""]))],null,function(l,n){l(n,1,0,n.component.person.family_name)})}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,[", ",""]))],null,function(l,n){l(n,1,0,n.component.person.family_name)})}function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"span",[["style","font-style: italic; color:gray"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\t\t\t\t\t(candidato)\n\t\t\t\t"]))],null,null)}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"div",[["style","float:right;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t","\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t"]))],null,function(l,n){l(n,1,0,n.component.person.kf_name)})}}});