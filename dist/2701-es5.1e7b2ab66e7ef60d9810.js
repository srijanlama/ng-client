!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,i){if(!e)return;if("string"==typeof e)return t(e,i);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,i)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,i){return t&&a(e.prototype,t),i&&a(e,i),e}(self.webpackChunksrijan_angular=self.webpackChunksrijan_angular||[]).push([[2701],{2701:function(t,a,n){"use strict";n.r(a),n.d(a,{ChatModule:function(){return ie}});for(var r=n(8583),o=n(665),l=n(5684),c=n(9517),d=n(2989),g=n(9668),u=n(1558),Z=[{id:1,name:"Brandon Smith",avatar:"assets/images/users/avatar-2.jpg",lastMessage:"How are you today?",totalUnread:3,lastMessageOn:"5:30am",userStatus:"offline"},{id:2,name:"Maria C",avatar:"assets/images/users/avatar-10.jpg",lastMessage:"Hey! a reminder for tomorrow's meeting?",totalUnread:0,lastMessageOn:"Thu",userStatus:"online"},{id:3,name:"Dominic A",avatar:"assets/images/users/avatar-8.jpg",lastMessage:"Are we going to have this week's planning meeting?",totalUnread:0,lastMessageOn:"4:30 am",userStatus:"busy"},{id:4,name:"Ronda D",avatar:"assets/images/users/avatar-9.jpg",lastMessage:"Please check these design assets..",totalUnread:0,lastMessageOn:"Wed",userStatus:"online"},{id:5,name:"Michael H",avatar:"assets/images/users/avatar-3.jpg",lastMessage:"Are you free for 15 mins? I would like to discuss something",totalUnread:25,lastMessageOn:"Tue",userStatus:"offline"},{id:6,name:"Thomas R",avatar:"assets/images/users/avatar-5.jpg",lastMessage:"Let's have meeting today between me, you and Tony...",totalUnread:0,lastMessageOn:"Tue",userStatus:"offline"},{id:7,name:"Thomas J",avatar:"assets/images/users/avatar-6.jpg",lastMessage:"How are you?",totalUnread:1,lastMessageOn:"Tue",userStatus:"offline"},{id:8,name:"Rikcy J",avatar:"assets/images/users/avatar-1.jpg",lastMessage:"Are you interested in learning?",totalUnread:0,lastMessageOn:"Mon",userStatus:"away"}],m={id:9,name:"Shreyu N",avatar:"assets/images/users/avatar-2.jpg"},p=[],f=[],v=0,h=Z;v<h.length;v++){var b=h[v];p.push({id:1,messages:[{type:"text",value:"Hello!"}],to:m,from:b,sendOn:"8:18 am"},{id:2,messages:[{type:"text",value:"Hi, How are you? What about our next meeting?"}],to:b,from:m,sendOn:"8:20 am"}),f.push({id:1,messages:[{type:"text",value:"Yeah everything is fine"},{type:"text",value:"Let's have it today if you are free"}],to:m,from:b,sendOn:"8:21 am"},{id:2,messages:[{type:"text",value:"Sure thing! let me know if 2pm works for you"}],to:b,from:m,sendOn:"8:25 am"},{id:3,messages:[{type:"text",value:"Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?"}],to:m,from:b,sendOn:"8:26 am"},{id:4,messages:[{type:"text",value:"2pm it is. sure, we can also discuss about the presentation talk format if you have some extra mins"},{type:"text",value:"Sure, let's discuss about presentation format, it would be great to finalize today."}],to:b,from:m,sendOn:"8:27 am"},{id:5,messages:[{type:"text",value:"Ok. I am attaching the last year format and assets here...."},{type:"file",value:{file:"Shreyu-sketch.zip",size:"2.3MB"}}],to:m,from:b,sendOn:"8:32 am"})}var T=[{id:1,day:"Yesterday",messages:[].concat(p)},{id:2,day:"Today",messages:[].concat(f)}],A=n(7716),q=n(2111),U=n(1782);function y(e,t){if(1&e&&(A.TgZ(0,"span",37),A._uU(1),A.qZA()),2&e){var i=A.oxw().$implicit;A.xp6(1),A.Oqu(i.totalUnread)}}var x=function(e){return{"bg-light":e}},w=function(e,t,i){return{"bg-success":e,"bg-danger":t,"bg-warning":i}};function _(e,t){if(1&e){var i=A.EpF();A.TgZ(0,"a",27),A.NdJ("click",function(){var e=A.CHM(i).$implicit;return A.oxw().activateUser(e)}),A.TgZ(1,"div",28),A.TgZ(2,"div",29),A._UZ(3,"span",30),A._UZ(4,"img",3),A.qZA(),A.TgZ(5,"div",31),A.TgZ(6,"h5",32),A.TgZ(7,"span",33),A._uU(8),A.qZA(),A._uU(9),A.qZA(),A.TgZ(10,"p",34),A.YNc(11,y,2,1,"span",35),A.TgZ(12,"span",36),A._uU(13),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA()}if(2&e){var a=t.$implicit,s=A.oxw();A.xp6(1),A.Q6J("ngClass",A.VKq(8,x,a.id===s.selectedUser.id)),A.xp6(2),A.Q6J("ngClass",A.kEZ(10,w,"online"===a.userStatus,"busy"===a.userStatus,"away"===a.userStatus)),A.xp6(1),A.Q6J("src",a.avatar,A.LSH)("alt",a.name),A.xp6(4),A.Oqu(a.lastMessageOn),A.xp6(1),A.hij(" ",a.name," "),A.xp6(2),A.Q6J("ngIf",a.totalUnread>0),A.xp6(2),A.Oqu(a.lastMessage)}}var k=function(){var e=function(){function e(t){i(this,e),this.authService=t,this.loggedInUser={},this.userList=[],this.searchUser="",this.selectUser=new A.vpe}return s(e,[{key:"ngOnInit",value:function(){this.loggedInUser=this.authService.currentUser(),this._fetchUsers()}},{key:"_fetchUsers",value:function(){this.userList=Z}},{key:"activateUser",value:function(e){this.selectedUser=e,this.selectUser.emit(this.selectedUser)}},{key:"search",value:function(){var e=this;this.userList=""===this.searchUser?[].concat(Z):[].concat(Z).filter(function(t){return t.name.toLowerCase().indexOf(e.searchUser.toLowerCase())>=0})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(A.Y36(U.$))},e.\u0275cmp=A.Xpm({type:e,selectors:[["app-chat-users"]],inputs:{selectedUser:"selectedUser"},outputs:{selectUser:"selectUser"},decls:41,vars:5,consts:[[1,"card"],[1,"card-body"],[1,"d-flex","pb-2","border-bottom","align-items-center"],["height","48",1,"me-2","rounded-circle",3,"src","alt"],[1,"my-0","fs-14"],[1,"flex-grow-1"],[1,"list-inline","text-end","mb-0"],["ngbDropdown","",1,"list-inline-item","fs-18"],["href","javascript: void(0);","ngbDropdownToggle","",1,"dropdown-toggle","text-dark"],[1,"bi","bi-three-dots-vertical"],["ngbDropdownMenu","",1,"dropdown-menu-end"],["ngbDropdownItem","","href","javascript: void(0);"],[1,"bi","bi-people","fs-16","me-2"],[1,"bi","bi-person-lines-fill","fs-16","me-2"],[1,"bi","bi-bookmark","fs-16","me-2"],[1,"bi","bi-person-plus","fs-16","me-2"],[1,"bi","bi-question-circle","fs-16","me-2"],[1,"bi","bi-gear","fs-16","me-2"],[1,"chat-search"],[1,"chat-search-box"],[1,"input-group"],["type","submit",1,"btn","input-group-text"],[1,"uil","uil-search"],["type","search","placeholder","Search...","id","top-search","name","seachUser",1,"form-control",3,"ngModel","ngModelChange","keyup"],["seachUser","ngModel"],[1,"pe-2",2,"max-height","545px"],["href","javascript:void(0);","class","text-body",3,"click",4,"ngFor","ngForOf"],["href","javascript:void(0);",1,"text-body",3,"click"],[1,"d-flex","align-items-start","p-2",3,"ngClass"],[1,"position-relative"],[1,"user-status",3,"ngClass"],[1,"w-100","overflow-hidden"],[1,"mt-0","mb-0","fs-14"],[1,"float-end","text-muted","fs-12"],[1,"mt-1","mb-0","text-muted","fs-14"],["class","float-end badge bg-danger text-white",4,"ngIf"],[1,"w-75","text-dark"],[1,"float-end","badge","bg-danger","text-white"]],template:function(e,t){1&e&&(A.TgZ(0,"div",0),A.TgZ(1,"div",1),A.TgZ(2,"div",2),A._UZ(3,"img",3),A.TgZ(4,"div"),A.TgZ(5,"h5",4),A._uU(6),A.qZA(),A.qZA(),A.TgZ(7,"div",5),A.TgZ(8,"ul",6),A.TgZ(9,"li",7),A.TgZ(10,"a",8),A._UZ(11,"i",9),A.qZA(),A.TgZ(12,"div",10),A.TgZ(13,"a",11),A._UZ(14,"i",12),A._uU(15,"New Group"),A.qZA(),A.TgZ(16,"a",11),A._UZ(17,"i",13),A._uU(18,"Contacts"),A.qZA(),A.TgZ(19,"a",11),A._UZ(20,"i",14),A._uU(21,"Saved Message"),A.qZA(),A.TgZ(22,"a",11),A._UZ(23,"i",15),A._uU(24,"Invite Friends"),A.qZA(),A.TgZ(25,"a",11),A._UZ(26,"i",16),A._uU(27,"Help"),A.qZA(),A.TgZ(28,"a",11),A._UZ(29,"i",17),A._uU(30,"Setting"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(31,"div"),A.TgZ(32,"form",18),A.TgZ(33,"div",19),A.TgZ(34,"div",20),A.TgZ(35,"button",21),A._UZ(36,"i",22),A.qZA(),A.TgZ(37,"input",23,24),A.NdJ("ngModelChange",function(e){return t.searchUser=e})("keyup",function(){return t.search()}),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(39,"ngx-simplebar",25),A.YNc(40,_,14,14,"a",26),A.qZA(),A.qZA(),A.qZA()),2&e&&(A.xp6(3),A.Q6J("src",t.loggedInUser.avatar,A.LSH)("alt",t.loggedInUser.name),A.xp6(3),A.Oqu(t.loggedInUser.name),A.xp6(31),A.Q6J("ngModel",t.searchUser),A.xp6(3),A.Q6J("ngForOf",t.userList))},directives:[c.jt,c.iD,c.Vi,c.TH,o._Y,o.JL,o.F,o.Fj,o.JJ,o.On,l.M,r.sg,r.mk,r.O5],styles:[""]}),e}(),M=n(4719),O=["chatForm"];function C(e,t){1&e&&(A.TgZ(0,"div",59),A.TgZ(1,"a",60),A._UZ(2,"i",61),A.qZA(),A.TgZ(3,"div",62),A.TgZ(4,"a",18),A._UZ(5,"i",63),A._uU(6,"Reply "),A.qZA(),A.TgZ(7,"a",18),A._UZ(8,"i",64),A._uU(9,"Starred "),A.qZA(),A.TgZ(10,"a",18),A._UZ(11,"i",65),A._uU(12,"Delete "),A.qZA(),A.TgZ(13,"a",18),A._UZ(14,"i",66),A._uU(15,"Copy "),A.qZA(),A.qZA(),A.qZA())}function J(e,t){if(1&e&&(A.TgZ(0,"div",67),A.TgZ(1,"p"),A._uU(2),A.qZA(),A.qZA()),2&e){var i=A.oxw().$implicit;A.xp6(2),A.Oqu(i.value)}}function j(e,t){if(1&e&&(A.TgZ(0,"div",68),A.TgZ(1,"div",69),A.TgZ(2,"div",70),A.TgZ(3,"div",71),A.TgZ(4,"div",72),A.TgZ(5,"span",73),A._uU(6,".ZIP"),A.qZA(),A.qZA(),A.qZA(),A.TgZ(7,"div",74),A.TgZ(8,"a",75),A._uU(9),A.qZA(),A.TgZ(10,"p",5),A._uU(11),A.qZA(),A.qZA(),A.TgZ(12,"div",71),A.TgZ(13,"a",76),A._UZ(14,"i",77),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA()),2&e){var i=A.oxw().$implicit;A.xp6(9),A.Oqu(i.value.file),A.xp6(2),A.Oqu(i.value.size)}}function I(e,t){1&e&&(A.TgZ(0,"div",78),A.TgZ(1,"a",60),A._UZ(2,"i",61),A.qZA(),A.TgZ(3,"div",62),A.TgZ(4,"a",18),A._UZ(5,"i",63),A._uU(6,"Reply "),A.qZA(),A.TgZ(7,"a",18),A._UZ(8,"i",64),A._uU(9,"Starred "),A.qZA(),A.TgZ(10,"a",18),A._UZ(11,"i",65),A._uU(12,"Delete "),A.qZA(),A.TgZ(13,"a",18),A._UZ(14,"i",66),A._uU(15,"Copy "),A.qZA(),A.qZA(),A.qZA())}function S(e,t){1&e&&A._UZ(0,"i",81)}function N(e,t){if(1&e&&(A.TgZ(0,"p",79),A._uU(1),A.YNc(2,S,1,0,"i",80),A.qZA()),2&e){var i=A.oxw(2).$implicit,a=A.oxw(2);A.xp6(1),A.hij(" ",i.sendOn," "),A.xp6(1),A.Q6J("ngIf",i.from.id===a.toUser.id)}}var H=function(e,t){return{odd:e,"mb-1":t}},Q=function(e){return{"justify-content-end":e}};function D(e,t){if(1&e&&(A.TgZ(0,"li",51),A.TgZ(1,"div",52),A.TgZ(2,"div",53),A.YNc(3,C,16,0,"div",54),A.YNc(4,J,3,1,"div",55),A.YNc(5,j,15,2,"div",56),A.YNc(6,I,16,0,"div",57),A.qZA(),A.YNc(7,N,3,2,"p",58),A.qZA(),A.qZA()),2&e){var i=t.$implicit,a=t.index,s=A.oxw().$implicit,n=A.oxw(2);A.Q6J("ngClass",A.WLB(7,H,s.from.id===n.toUser.id,s.messages.length>1&&a!=s.messages.length-1)),A.xp6(2),A.Q6J("ngClass",A.VKq(10,Q,s.from.id===n.toUser.id)),A.xp6(1),A.Q6J("ngIf",s.from.id===n.toUser.id),A.xp6(1),A.Q6J("ngIf","text"===i.type),A.xp6(1),A.Q6J("ngIf","file"===i.type),A.xp6(1),A.Q6J("ngIf",s.from.id!==n.toUser.id),A.xp6(1),A.Q6J("ngIf",a===s.messages.length-1)}}function F(e,t){if(1&e&&(A.ynx(0),A.YNc(1,D,8,12,"li",50),A.BQk()),2&e){var i=t.$implicit;A.xp6(1),A.Q6J("ngForOf",i.messages)}}function Y(e,t){if(1&e&&(A.ynx(0),A.TgZ(1,"li",48),A._UZ(2,"hr"),A.TgZ(3,"h4"),A.TgZ(4,"span",49),A._uU(5),A.qZA(),A.qZA(),A.qZA(),A.YNc(6,F,2,1,"ng-container",27),A.BQk()),2&e){var i=t.$implicit;A.xp6(5),A.Oqu(i.day),A.xp6(1),A.Q6J("ngForOf",i.messages)}}function $(e,t){1&e&&(A.TgZ(0,"div",82),A._uU(1," Please enter your messsage "),A.qZA())}function L(e,t){if(1&e){var i=A.EpF();A.TgZ(0,"div",83),A.TgZ(1,"div",84),A._UZ(2,"img",85),A.qZA(),A.qZA(),A.TgZ(3,"div",86),A.TgZ(4,"p",87),A._uU(5,"Calling..."),A.qZA(),A.TgZ(6,"div",88),A.TgZ(7,"ul",89),A.TgZ(8,"li",90),A.TgZ(9,"a",91),A._UZ(10,"i",92),A.qZA(),A.qZA(),A.TgZ(11,"li",93),A.NdJ("click",function(){return A.CHM(i).$implicit.close("Close click")}),A.TgZ(12,"a",94),A._UZ(13,"i",95),A.qZA(),A.qZA(),A.TgZ(14,"li",96),A.TgZ(15,"a",91),A._UZ(16,"i",97),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA()}}function B(e,t){if(1&e){var i=A.EpF();A.TgZ(0,"div",98),A.TgZ(1,"div",99),A._UZ(2,"img",100),A.qZA(),A.qZA(),A.TgZ(3,"div",101),A.TgZ(4,"div",102),A.TgZ(5,"ul",89),A.TgZ(6,"li",90),A.TgZ(7,"a",103),A._UZ(8,"i",92),A.qZA(),A.qZA(),A.TgZ(9,"li",104),A.TgZ(10,"a",105),A.TgZ(11,"i",106),A.NdJ("click",function(){return A.CHM(i).$implicit.close("Close click")}),A.qZA(),A.qZA(),A.qZA(),A.TgZ(12,"li",96),A.TgZ(13,"a",103),A._UZ(14,"i",11),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA()}}function E(e,t){1&e&&(A.TgZ(0,"h5",122),A._uU(1," About "),A._UZ(2,"i",123),A.qZA())}function R(e,t){1&e&&(A.TgZ(0,"div",124),A.TgZ(1,"div",125),A.TgZ(2,"div",126),A._UZ(3,"i",127),A._uU(4,"Phone"),A.qZA(),A.TgZ(5,"div",128),A._uU(6,"(415) 281 - 1649"),A.qZA(),A.TgZ(7,"div",126),A._UZ(8,"i",129),A._uU(9,"Email"),A.qZA(),A.TgZ(10,"div",128),A._uU(11,"shreyu.abc@gmail.com"),A.qZA(),A.qZA(),A.qZA())}function z(e,t){1&e&&(A.TgZ(0,"h5",122),A._uU(1,"Media, Links and Docs "),A._UZ(2,"i",123),A.qZA())}function W(e,t){1&e&&(A.TgZ(0,"div",124),A.TgZ(1,"div",130),A._UZ(2,"i",131),A.qZA(),A.TgZ(3,"div",130),A._UZ(4,"i",132),A.qZA(),A.TgZ(5,"div",130),A._UZ(6,"i",133),A.qZA(),A.TgZ(7,"div",130),A._UZ(8,"i",134),A.qZA(),A.qZA())}function P(e,t){if(1&e){var i=A.EpF();A.TgZ(0,"div",107),A.TgZ(1,"div",108),A.TgZ(2,"button",109),A.NdJ("click",function(){return A.CHM(i).$implicit.close("Close click")}),A.qZA(),A.qZA(),A.TgZ(3,"div",110),A._UZ(4,"img",111),A.qZA(),A.TgZ(5,"div",110),A.TgZ(6,"h5",112),A._uU(7,"Rhonda D"),A.qZA(),A.qZA(),A.TgZ(8,"div",110),A.TgZ(9,"div",113),A.NdJ("click",function(){var e=A.CHM(i).$implicit,t=A.oxw(),a=A.MAs(61);return e.close("Close click"),t.openModal(a,"sm","voice-call")}),A.TgZ(10,"a",114),A._UZ(11,"i",95),A.qZA(),A.qZA(),A.TgZ(12,"div",113),A.NdJ("click",function(){var e=A.CHM(i).$implicit,t=A.oxw(),a=A.MAs(63);return e.close("Close click"),t.openModal(a,"sm","video-call")}),A.TgZ(13,"a",114),A._UZ(14,"i",11),A.qZA(),A.qZA(),A.TgZ(15,"div",113),A.NdJ("click",function(){return A.CHM(i).$implicit.close("Close click")}),A.TgZ(16,"a",114),A._UZ(17,"i",115),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(18,"div",101),A.TgZ(19,"ngb-accordion",116,117),A.TgZ(21,"ngb-panel",118),A.YNc(22,E,3,0,"ng-template",119),A.YNc(23,R,12,0,"ng-template",120),A.qZA(),A.TgZ(24,"ngb-panel",121),A.YNc(25,z,3,0,"ng-template",119),A.YNc(26,W,9,0,"ng-template",120),A.qZA(),A.qZA(),A.qZA()}2&e&&(A.xp6(19),A.Q6J("closeOthers",!0))}var V,G,X=function(e){return{"is-invalid":e}},K=function(){var t=function(){function t(e){i(this,t),this.activeModal=e,this.loading=!1,this.chatHistory=[],this.newMessage=""}return s(t,[{key:"ngOnInit",value:function(){this.initData()}},{key:"ngOnChanges",value:function(t){var i=this;t.selectedUser.currentValue!==t.selectedUser.previousValue&&(this.chatHistory=[].concat(T),this.loading=!0,setTimeout(function(){i.chatHistory=e(i.chatHistory).map(function(e,t){return{id:e.id,day:e.day,messages:e.messages.filter(function(e){return e.to.id===i.toUser.id&&e.from.id===i.selectedUser.id||i.toUser.id===e.from.id&&e.to.id===i.selectedUser.id})}}),i.loading=!1},750))}},{key:"initData",value:function(){this.toUser={id:9,name:"Shreyu N",avatar:"assets/images/users/avatar-2.jpg"}}},{key:"openModal",value:function(e,t,i){var a,s;this.activeModal.open(e,{centered:!0,size:t||""}),i&&(null===(s=null===(a=document.getElementById(i))||void 0===a?void 0:a.parentElement)||void 0===s||s.classList.add(i))}},{key:"sendChatMessage",value:function(){var t=e(this.chatHistory[this.chatHistory.length-1].messages);t.push({id:t.length+1,from:this.toUser,to:this.selectedUser,messages:[{type:"text",value:this.newMessage}],sendOn:(new Date).getHours()+":"+(new Date).getMinutes()}),this.chatHistory[this.chatHistory.length-1].messages=t,this.chatForm.resetForm()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(A.Y36(c.FF))},t.\u0275cmp=A.Xpm({type:t,selectors:[["app-chat-area"]],viewQuery:function(e,t){var i;(1&e&&A.Gf(O,7),2&e)&&(A.iGM(i=A.CRH())&&(t.chatForm=i.first))},inputs:{selectedUser:"selectedUser"},features:[A.TTD],decls:66,vars:11,consts:[[1,"card"],[1,"card-body"],[1,"d-flex","pb-2","border-bottom","align-items-center"],["height","48","alt","Brandon Smith",1,"me-2","rounded-circle",3,"src"],[1,"mt-0","mb-0","fs-14"],[1,"mb-0"],[1,"flex-grow-1"],[1,"list-inline","float-end","mb-0"],[1,"list-inline-item","fs-18","me-3","dropdown"],["href","javascript: void(0);",1,"text-dark",3,"click"],[1,"bi","bi-telephone-plus"],[1,"bi","bi-camera-video"],["ngbDropdown","",1,"list-inline-item","fs-18"],["href","javascript: void(0);","ngbDropdownToggle","",1,"text-dark"],[1,"bi","bi-three-dots-vertical"],["ngbDropdownMenu","",1,"dropdown-menu-end"],["ngbDropdownItem","","href","javascript: void(0);",3,"click"],[1,"bi","bi-person-circle","fs-16","me-2"],["ngbDropdownItem",""],[1,"bi","bi-music-note-list","fs-16","me-2"],[1,"bi","bi-search","fs-16","me-2"],[1,"bi","bi-image","fs-16","me-2"],[1,"bi","bi-arrow-right-circle","fs-16","me-2"],[1,"mt-1"],[3,"display"],[2,"max-height","505px"],[1,"conversation-list","px-0","h-100"],[4,"ngFor","ngForOf"],[1,"mt-2","bg-light","p-3","rounded"],["name","chat-form","id","chat-form",1,"needs-validation",3,"ngSubmit"],["chatForm","ngForm"],[1,"row"],[1,"col","mb-2","mb-sm-0"],["type","text","placeholder","Enter your text","name","message","required","",1,"form-control","border-0",3,"ngModel","ngClass","ngModelChange"],["message","ngModel"],["class","invalid-feedback",4,"ngIf"],[1,"col-sm-auto"],[1,"btn-group"],["href","javascript:void(0)",1,"btn","btn-light"],[1,"bi","bi-emoji-smile","fs-18"],[1,"bi","bi-paperclip","fs-18"],[1,"bi","bi-camera","fs-18"],[1,"d-grid"],["type","submit",1,"btn","btn-success","chat-send",3,"disabled"],[1,"uil","uil-message"],["voicecall",""],["videocall",""],["profile",""],[1,"position-relative"],[1,"badge","bg-light","text-dark","position-absolute","top-0","start-50","translate-middle"],["class","clearfix",3,"ngClass",4,"ngFor","ngForOf"],[1,"clearfix",3,"ngClass"],[1,"conversation-text","ms-0"],[1,"d-flex",3,"ngClass"],["class","conversation-actions dropstart","ngbDropdown","","placement","start-top",4,"ngIf"],["class","ctext-wrap",4,"ngIf"],["class","card mb-1 shadow-none border text-start",4,"ngIf"],["class","conversation-actions dropend","ngbDropdown","","placement","end-top",4,"ngIf"],["class","text-muted fs-12 mb-0 mt-1",4,"ngIf"],["ngbDropdown","","placement","start-top",1,"conversation-actions","dropstart"],["href","javascript: void(0);","ngbDropdownToggle","",1,"text-dark","ps-1"],[1,"bi","bi-three-dots-vertical","fs-14"],["ngbDropdownMenu",""],[1,"bi","bi-reply","fs-16","me-2"],[1,"bi","bi-star","fs-16","me-2"],[1,"bi","bi-trash","fs-16","me-2"],[1,"bi","bi-files","fs-16","me-2"],[1,"ctext-wrap"],[1,"card","mb-1","shadow-none","border","text-start"],[1,"p-2"],[1,"row","align-items-center"],[1,"col-auto"],[1,"avatar-sm","bg-primary","text-white"],[1,"avatar-title","rounded"],[1,"col","ps-0"],["href","javascript:void(0);",1,"text-muted","fw-bold"],["href","javascript:void(0);",1,"ps-3","fs-24"],[1,"bi","bi-arrow-down-square"],["ngbDropdown","","placement","end-top",1,"conversation-actions","dropend"],[1,"text-muted","fs-12","mb-0","mt-1"],["class","bi bi-check2-all ms-1 text-success",4,"ngIf"],[1,"bi","bi-check2-all","ms-1","text-success"],[1,"invalid-feedback"],["id","voice-call",1,"modal-header","mt-5","justify-content-center"],[1,"voice-call-head"],["src","assets/images/users/avatar-2.jpg","alt","Rhonda D",1,"rounded-circle"],[1,"modal-body","pt-0","text-center"],[1,"mb-5"],[1,"voice-call-action","pt-4","pb-2"],[1,"list-inline"],[1,"list-inline-item","avatar-sm","fw-bold","me-2"],["href","javascript: void(0);",1,"avatar-title","rounded-circle","bg-soft-secondary","text-dark","fs-16"],[1,"bi","bi-mic-mute"],[1,"list-inline-item","avatar","fw-bold","me-2",3,"click"],["href"," javascript: void(0);",1,"avatar-title","rounded-circle","bg-danger","text-white","fs-18"],[1,"bi","bi-telephone"],[1,"list-inline-item","avatar-sm","fw-bold"],[1,"bi","bi-volume-up"],["id","video-call",1,"modal-header","mb-5","justify-content-end"],[1,"video-call-head"],["src","assets/images/users/avatar-2.jpg","alt","Rhonda D",1,"rounded"],[1,"modal-body"],[1,"video-call-action","text-center","pt-4","pb-2"],["href","javascript: void(0);",1,"avatar-title","rounded-circle","bg-soft-light","text-white","fs-16"],[1,"list-inline-item","avatar","fw-bold","me-2"],["href","javascript: void(0);",1,"avatar-title","rounded-circle","bg-danger","text-white","fs-18"],[1,"bi","bi-telephone",3,"click"],[1,"m-2"],[1,"modal-header"],["type","button",1,"btn-close",3,"click"],[1,"text-center","mb-3"],["src","assets/images/users/avatar-5.jpg","height","48","alt","Rhonda D",1,"rounded-circle","avatar-lg"],[1,"mt-0","mb-0","fs-18"],[1,"avatar-sm","fw-bold","d-inline-block","me-2",3,"click"],["href","javascript: void(0);",1,"avatar-title","rounded-circle","border","border-secondary","text-dark"],[1,"bi","bi-chat-left-dots"],["activeIds","about",1,"custom-accordionwitharrow","mb-1",3,"closeOthers"],["acc1","ngbAccordion"],["id","about","cardClass","shadow-none border-0"],["ngbPanelTitle",""],["ngbPanelContent",""],["id","files","cardClass","shadow-none border-0"],[1,"m-0","fs-16","text-dark"],[1,"uil","uil-angle-down","float-end","accordion-arrow"],[1,"card-body","pt-0","text-muted"],[1,"row","align-items-center","ms-1"],[1,"col-4","p-2"],[1,"bi","bi-telephone","fs-18","me-2"],[1,"col-8","p-2","border-bottom"],[1,"bi","bi-envelope","fs-18","me-2"],[1,"d-inline-block","me-2"],[1,"bi","bi-file-earmark-pdf","h2"],[1,"bi","bi-file-earmark-word","h2"],[1,"bi","bi-images","h2"],[1,"bi","bi-file-earmark-ppt","h2"]],template:function(e,t){if(1&e){var i=A.EpF();A.TgZ(0,"div",0),A.TgZ(1,"div",1),A.TgZ(2,"div",2),A._UZ(3,"img",3),A.TgZ(4,"div"),A.TgZ(5,"h5",4),A._uU(6),A.qZA(),A.TgZ(7,"p",5),A._uU(8),A.qZA(),A.qZA(),A.TgZ(9,"div",6),A.TgZ(10,"ul",7),A.TgZ(11,"li",8),A.TgZ(12,"a",9),A.NdJ("click",function(){A.CHM(i);var e=A.MAs(61);return t.openModal(e,"sm","voice-call")}),A._UZ(13,"i",10),A.qZA(),A.qZA(),A.TgZ(14,"li",8),A.TgZ(15,"a",9),A.NdJ("click",function(){A.CHM(i);var e=A.MAs(63);return t.openModal(e,"sm","video-call")}),A._UZ(16,"i",11),A.qZA(),A.qZA(),A.TgZ(17,"li",12),A.TgZ(18,"a",13),A._UZ(19,"i",14),A.qZA(),A.TgZ(20,"div",15),A.TgZ(21,"a",16),A.NdJ("click",function(){A.CHM(i);var e=A.MAs(65);return t.openModal(e)}),A._UZ(22,"i",17),A._uU(23,"View Profile "),A.qZA(),A.TgZ(24,"a",18),A._UZ(25,"i",19),A._uU(26,"Media, Links and Docs"),A.qZA(),A.TgZ(27,"a",18),A._UZ(28,"i",20),A._uU(29,"Search"),A.qZA(),A.TgZ(30,"a",18),A._UZ(31,"i",21),A._uU(32,"Wallpaper"),A.qZA(),A.TgZ(33,"a",18),A._UZ(34,"i",22),A._uU(35,"More"),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(36,"div",23),A._UZ(37,"app-ui-preloader",24),A.TgZ(38,"ngx-simplebar",25),A.TgZ(39,"ul",26),A.YNc(40,Y,7,2,"ng-container",27),A.qZA(),A.qZA(),A.TgZ(41,"div",28),A.TgZ(42,"form",29,30),A.NdJ("ngSubmit",function(){return A.CHM(i),A.MAs(43).form.valid&&t.sendChatMessage()}),A.TgZ(44,"div",31),A.TgZ(45,"div",32),A.TgZ(46,"input",33,34),A.NdJ("ngModelChange",function(e){return t.newMessage=e}),A.qZA(),A.YNc(48,$,2,0,"div",35),A.qZA(),A.TgZ(49,"div",36),A.TgZ(50,"div",37),A.TgZ(51,"a",38),A._UZ(52,"i",39),A.qZA(),A.TgZ(53,"a",38),A._UZ(54,"i",40),A.qZA(),A.TgZ(55,"a",38),A._UZ(56,"i",41),A.qZA(),A.TgZ(57,"div",42),A.TgZ(58,"button",43),A._UZ(59,"i",44),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.YNc(60,L,17,0,"ng-template",null,45,A.W1O),A.YNc(62,B,15,0,"ng-template",null,46,A.W1O),A.YNc(64,P,27,1,"ng-template",null,47,A.W1O)}if(2&e){var a=A.MAs(43),s=A.MAs(47);A.xp6(3),A.Q6J("src",t.selectedUser.avatar,A.LSH),A.xp6(3),A.Oqu(t.selectedUser.name),A.xp6(2),A.Oqu(t.selectedUser.userStatus),A.xp6(29),A.Q6J("display",t.loading),A.xp6(3),A.Q6J("ngForOf",t.chatHistory),A.xp6(6),A.Q6J("ngModel",t.newMessage)("ngClass",A.VKq(9,X,a.submitted&&s.invalid&&(s.dirty||s.touched))),A.xp6(2),A.Q6J("ngIf",a.submitted&&s.invalid&&(s.dirty||s.touched)),A.xp6(10),A.Q6J("disabled",!a.form.valid)}},directives:[c.jt,c.iD,c.Vi,c.TH,M.T,l.M,r.sg,o._Y,o.JL,o.F,o.Fj,o.Q7,o.JJ,o.On,r.mk,r.O5,c.gY,c.Gk,c.Cu,c.gW],styles:[""]}),t}(),ee=[{path:"",component:(V=function(){function e(){i(this,e),this.pageTitle=[]}return s(e,[{key:"ngOnInit",value:function(){this.pageTitle=[{label:"Apps",path:"/"},{label:"Chat",path:"/",active:!0}],this.selectedUser=Z[1]}},{key:"onSelectedUser",value:function(e){this.selectedUser=e}}]),e}(),V.\u0275fac=function(e){return new(e||V)},V.\u0275cmp=A.Xpm({type:V,selectors:[["app-chat"]],decls:6,vars:3,consts:[["title","Chat",3,"breadcrumbItems"],[1,"row"],[1,"col-xxl-3","col-lg-5"],[3,"selectedUser","selectUser"],[1,"col-xxl-9","col-lg-7"],[3,"selectedUser"]],template:function(e,t){1&e&&(A._UZ(0,"app-page-title",0),A.TgZ(1,"div",1),A.TgZ(2,"div",2),A.TgZ(3,"app-chat-users",3),A.NdJ("selectUser",function(e){return t.onSelectedUser(e)}),A.qZA(),A.qZA(),A.TgZ(4,"div",4),A._UZ(5,"app-chat-area",5),A.qZA(),A.qZA()),2&e&&(A.Q6J("breadcrumbItems",t.pageTitle),A.xp6(3),A.Q6J("selectedUser",t.selectedUser),A.xp6(2),A.Q6J("selectedUser",t.selectedUser))},directives:[q.T,k,K],styles:[""]}),V)}],te=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=A.oAB({type:e}),e.\u0275inj=A.cJS({imports:[[u.Bz.forChild(ee)],u.Bz]}),e}(),ie=((G=function e(){i(this,e)}).\u0275fac=function(e){return new(e||G)},G.\u0275mod=A.oAB({type:G}),G.\u0275inj=A.cJS({imports:[[r.ez,o.u5,g.W,l.t,c.Gs,c.XC,c.bz,d.p,te]]}),G)},2989:function(e,t,a){"use strict";a.d(t,{p:function(){return r}});var s=a(8583),n=a(7716),r=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.ez]]}),e}()},2111:function(e,t,a){"use strict";a.d(t,{T:function(){return g}});var n=a(7716),r=a(9075),o=a(8583);function l(e,t){if(1&e&&(n.TgZ(0,"li",6),n.TgZ(1,"a",11),n._uU(2),n.qZA(),n.qZA()),2&e){var i=n.oxw().$implicit;n.xp6(2),n.Oqu(i.label)}}function c(e,t){if(1&e&&(n.TgZ(0,"li",12),n.TgZ(1,"a",13),n._uU(2),n.qZA(),n.qZA()),2&e){var i=n.oxw().$implicit;n.xp6(2),n.Oqu(i.label)}}function d(e,t){if(1&e&&(n.ynx(0),n.YNc(1,l,3,1,"li",9),n.YNc(2,c,3,1,"li",10),n.BQk()),2&e){var i=t.$implicit;n.xp6(1),n.Q6J("ngIf",!i.active),n.xp6(1),n.Q6J("ngIf",i.active)}}var g=function(){var e=function(){function e(t){i(this,e),this.titleService=t,this.breadcrumbItems=[],this.title=""}return s(e,[{key:"ngOnInit",value:function(){this.titleService.setTitle((this.windowTitle?this.windowTitle:this.title)+" | Shreyu - Responsive Angular and Bootstrap 5 Admin Dashboard Template")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.Dx))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title",windowTitle:"windowTitle"},decls:11,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box"],[1,"page-title"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[4,"ngFor","ngForOf"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],["href","javascript: void(0);","routerLink","[item.path]"],[1,"breadcrumb-item","active"],["routerLink","[item.path]"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"h4",3),n._uU(4),n.qZA(),n.TgZ(5,"div",4),n.TgZ(6,"ol",5),n.TgZ(7,"li",6),n.TgZ(8,"a",7),n._uU(9,"Shreyu"),n.qZA(),n.qZA(),n.YNc(10,d,3,2,"ng-container",8),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(4),n.Oqu(t.title),n.xp6(6),n.Q6J("ngForOf",t.breadcrumbItems))},directives:[o.sg,o.O5],styles:[""]}),e}()}}])}();