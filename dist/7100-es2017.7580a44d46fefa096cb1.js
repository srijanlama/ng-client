(self.webpackChunksrijan_angular=self.webpackChunksrijan_angular||[]).push([[7100],{7100:function(t,e,i){"use strict";i.r(e),i.d(e,{ListModule:function(){return y}});var n=i(8583),o=i(9517),s=i(9668),a=i(1558),r=i(5459),l=i(7716),c=i(9075),g=i(8785);function p(t,e){if(1&t&&(l.TgZ(0,"div",48),l._uU(1),l.qZA()),2&t){const t=l.oxw().$implicit;l.xp6(1),l.hij(" ",t.state,"")}}function m(t,e){if(1&t&&(l.TgZ(0,"div",49),l._uU(1),l.qZA()),2&t){const t=l.oxw().$implicit;l.xp6(1),l.hij(" ",t.state,"")}}function d(t,e){if(1&t&&l._UZ(0,"img",53),2&t){const t=l.oxw().$implicit;l.Q6J("src",t.image,l.LSH)}}function u(t,e){if(1&t&&(l.TgZ(0,"div",54),l.TgZ(1,"span"),l._uU(2),l.qZA(),l.qZA()),2&t){const t=l.oxw().$implicit;l.xp6(1),l.MT6("avatar-title rounded-circle bg-soft-",t.variant," text-",t.variant,""),l.xp6(1),l.Oqu(t.name[0])}}function Z(t,e){if(1&t&&(l.ynx(0),l.TgZ(1,"a",50),l.YNc(2,d,1,1,"img",51),l.YNc(3,u,3,5,"div",52),l.qZA(),l.BQk()),2&t){const t=e.$implicit;l.xp6(2),l.Q6J("ngIf",t.image),l.xp6(1),l.Q6J("ngIf",t.variant)}}function b(t,e){if(1&t&&(l.TgZ(0,"a",50),l.TgZ(1,"div",54),l.TgZ(2,"span",55),l._uU(3),l.qZA(),l.qZA(),l.qZA()),2&t){const t=l.oxw().$implicit,e=l.oxw();l.xp6(3),l.hij("",t.teamMembers.length-e.displayCount,"+")}}function f(t,e){if(1&t&&l._UZ(0,"ngb-progressbar",56),2&t){const t=l.oxw().$implicit;l.MGl("ngbTooltip","",t.progress,"% completed"),l.Q6J("value",t.progress)}}function T(t,e){if(1&t&&l._UZ(0,"ngb-progressbar",57),2&t){const t=l.oxw().$implicit;l.MGl("ngbTooltip","",t.progress,"% completed"),l.Q6J("value",t.progress)}}const v=function(){return["../details"]},h=function(t){return{id:t}};function q(t,e){if(1&t&&(l.TgZ(0,"div",23),l.TgZ(1,"div",24),l.TgZ(2,"div",25),l.YNc(3,p,2,1,"div",26),l.YNc(4,m,2,1,"div",27),l.TgZ(5,"p",28),l._uU(6),l.qZA(),l.TgZ(7,"h5"),l.TgZ(8,"a",29),l._uU(9),l.qZA(),l.qZA(),l.TgZ(10,"p",30),l._uU(11),l.qZA(),l.TgZ(12,"div"),l.YNc(13,Z,4,2,"ng-container",31),l.YNc(14,b,4,1,"a",32),l.qZA(),l.qZA(),l.TgZ(15,"div",33),l.TgZ(16,"div",34),l.TgZ(17,"div",35),l.TgZ(18,"ul",36),l.TgZ(19,"li",37),l.TgZ(20,"a",38),l._UZ(21,"i",39),l._uU(22),l.qZA(),l.qZA(),l.TgZ(23,"li",37),l.TgZ(24,"a",40),l._UZ(25,"i",41),l._uU(26),l.qZA(),l.qZA(),l.TgZ(27,"li",42),l.TgZ(28,"a",43),l._UZ(29,"i",44),l._uU(30),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(31,"div",45),l.YNc(32,f,1,2,"ngb-progressbar",46),l.YNc(33,T,1,2,"ngb-progressbar",47),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t){const t=e.$implicit,i=l.oxw();l.xp6(3),l.Q6J("ngIf","Completed"===t.state),l.xp6(1),l.Q6J("ngIf","Pending"===t.state),l.xp6(2),l.Oqu(t.technology),l.xp6(2),l.Q6J("routerLink",l.DdM(14,v))("queryParams",l.VKq(15,h,t.id)),l.xp6(1),l.Oqu(t.title),l.xp6(2),l.Oqu(t.shortDesc),l.xp6(2),l.Q6J("ngForOf",i.getDisplayMembersList(t.teamMembers)),l.xp6(1),l.Q6J("ngIf",t.teamMembers.length>i.modifiedTeamMembers.length),l.xp6(8),l.hij(" ",t.endDate," "),l.xp6(4),l.hij(" ",t.totalTasks," "),l.xp6(4),l.hij(" ",t.totalComments," "),l.xp6(2),l.Q6J("ngIf","Completed"===t.state),l.xp6(1),l.Q6J("ngIf","Pending"===t.state)}}const A=[{path:"",component:(()=>{class t{constructor(t){this.titleService=t,this.projectList=[],this.displayCount=3,this.modifiedTeamMembers=[],t.setTitle("Projects | Shreyu - Responsive Angular and Bootstrap 5 Admin Dashboard Template")}ngOnInit(){this._fetchData()}_fetchData(){this.projectList=r.N}getDisplayMembersList(t){return this.modifiedTeamMembers=t.length<=this.displayCount||t.length-this.displayCount==1?t:t.filter((t,e)=>e<this.displayCount),this.modifiedTeamMembers}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(c.Dx))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-project-list"]],decls:32,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title"],[1,"page-title-right"],[1,"mt-2","mt-md-0"],["type","button",1,"btn","btn-danger","me-4","mb-2","mb-sm-0"],[1,"uil-plus","me-1"],[1,"btn-group"],["type","button",1,"btn","btn-primary","mb-2","mb-sm-0"],[1,"btn-group","ms-md-1"],["type","button",1,"btn","btn-white","mb-2","mb-sm-0"],[1,"btn-group","ms-2","d-none","d-sm-inline-block","me-1"],["type","button",1,"btn","btn-primary"],[1,"uil","uil-apps"],[1,"btn-group","d-none","d-sm-inline-block"],["type","button",1,"btn","btn-white"],[1,"uil","uil-align-left-justify"],["class","col-xl-4 col-md-6",4,"ngFor","ngForOf"],[1,"row","mb-3","mt-2"],[1,"text-center"],["href","javascript:void(0);",1,"btn","btn-white"],["data-feather","loader","appFeatherIcon","",1,"icon-dual","icon-xs","me-2"],[1,"col-xl-4","col-md-6"],[1,"card"],[1,"card-body"],["class","badge bg-success float-end",4,"ngIf"],["class","badge bg-warning float-end",4,"ngIf"],[1,"text-success","text-uppercase","fs-12","mb-2"],[1,"text-dark",3,"routerLink","queryParams"],[1,"text-muted","mb-4"],[4,"ngFor","ngForOf"],["href","javascript: void(0);",4,"ngIf"],[1,"card-body","border-top"],[1,"row","align-items-center"],[1,"col-sm-auto"],[1,"list-inline","mb-0"],[1,"list-inline-item","pe-2"],["href","javascript:void(0)","placement","top","ngbTooltip","Due date",1,"text-muted","d-inline-block"],[1,"uil","uil-calender","me-1"],["href","javascript:void(0)","placement","top","ngbTooltip","Tasks",1,"text-muted","d-inline-block"],[1,"uil","uil-bars","me-1"],[1,"list-inline-item"],["href","javascript:void(0)","placement","top","ngbTooltip","Comments",1,"text-muted","d-inline-block"],[1,"uil","uil-comments-alt","me-1"],[1,"col","offset-sm-1"],["type","success","class","mt-4 mt-sm-0","height","5px","placement","top",3,"value","ngbTooltip",4,"ngIf"],["type","warning","class","mt-4 mt-sm-0","height","5px","placement","top",3,"value","ngbTooltip",4,"ngIf"],[1,"badge","bg-success","float-end"],[1,"badge","bg-warning","float-end"],["href","javascript: void(0);"],["alt","","class","avatar-sm m-1 rounded-circle",3,"src",4,"ngIf"],["class","avatar-sm fw-bold d-inline-block m-1",4,"ngIf"],["alt","",1,"avatar-sm","m-1","rounded-circle",3,"src"],[1,"avatar-sm","fw-bold","d-inline-block","m-1"],[1,"avatar-title","rounded-circle","bg-soft-warning","text-warning"],["type","success","height","5px","placement","top",1,"mt-4","mt-sm-0",3,"value","ngbTooltip"],["type","warning","height","5px","placement","top",1,"mt-4","mt-sm-0",3,"value","ngbTooltip"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"h4",3),l._uU(4,"Projects List"),l.qZA(),l.TgZ(5,"div",4),l.TgZ(6,"div",5),l.TgZ(7,"button",6),l._UZ(8,"i",7),l._uU(9," Create Project "),l.qZA(),l.TgZ(10,"div",8),l.TgZ(11,"button",9),l._uU(12,"All"),l.qZA(),l.qZA(),l.TgZ(13,"div",10),l.TgZ(14,"button",11),l._uU(15,"Ongoing"),l.qZA(),l.TgZ(16,"button",11),l._uU(17,"Finished"),l.qZA(),l.qZA(),l.TgZ(18,"div",12),l.TgZ(19,"button",13),l._UZ(20,"i",14),l.qZA(),l.qZA(),l.TgZ(21,"div",15),l.TgZ(22,"button",16),l._UZ(23,"i",17),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(24,"div",0),l.YNc(25,q,34,17,"div",18),l.qZA(),l.TgZ(26,"div",19),l.TgZ(27,"div",1),l.TgZ(28,"div",20),l.TgZ(29,"a",21),l._UZ(30,"i",22),l._uU(31," Load more "),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(25),l.Q6J("ngForOf",e.projectList))},directives:[n.sg,g.R,n.O5,a.yS,o._L,o.Ly],styles:[""]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[a.Bz.forChild(A)],a.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[n.ez,o.HK,o.ZQ,s.W,x]]}),t})()}}]);