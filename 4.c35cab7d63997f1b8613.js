(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{CKRj:function(t,e,c){"use strict";c.r(e),c.d(e,"TrainingModule",function(){return Z});var n=c("l7P3"),i=c("PCNd"),a=c("tyNb"),r=c("vQgB"),s=c("fXoL"),o=c("ofXK"),l=c("wZkO"),b=c("a318"),u=c("vEl1"),m=c("XiUz"),p=c("3Pt+"),f=c("Wp6s"),d=c("kmnG"),g=c("d3UM"),h=c("FKr1"),y=c("Xa2L"),T=c("bTqV");function D(t,e){if(1&t&&(s.Ub(0,"mat-option",9),s.zc(1),s.Tb()),2&t){const t=e.$implicit;s.lc("value",t.id),s.Db(1),s.Bc(" ",t.name," ")}}function U(t,e){if(1&t&&(s.Ub(0,"mat-form-field"),s.Ub(1,"mat-select",7),s.yc(2,D,2,2,"mat-option",8),s.hc(3,"async"),s.Tb(),s.Tb()),2&t){const t=s.gc();s.Db(2),s.lc("ngForOf",s.ic(3,1,t.exercises$))}}function v(t,e){1&t&&s.Pb(0,"mat-spinner")}function x(t,e){if(1&t&&(s.Ub(0,"button",12),s.zc(1,"Start"),s.Tb()),2&t){s.gc(2);const t=s.qc(2);s.lc("disabled",t.invalid)}}function S(t,e){if(1&t){const t=s.Vb();s.Ub(0,"button",13),s.cc("click",function(){return s.sc(t),s.gc(2).fetchExercises()}),s.zc(1,"Fetch Again"),s.Tb()}}function w(t,e){if(1&t&&(s.Ub(0,"mat-card-actions",4),s.yc(1,x,2,1,"button",10),s.hc(2,"async"),s.yc(3,S,2,0,"button",11),s.hc(4,"async"),s.Tb()),2&t){const t=s.gc();s.Db(1),s.lc("ngIf",s.ic(2,2,t.exercises$)),s.Db(2),s.lc("ngIf",!s.ic(4,4,t.exercises$))}}let I=(()=>{class t{constructor(t,e){this.trainingService=t,this.store=e}ngOnInit(){this.isLoading$=this.store.select(b.b),this.exercises$=this.store.select(r.b),this.fetchExercises()}fetchExercises(){this.trainingService.fatchAvailableExercises()}onStartTraining(t){this.trainingService.startExercise(t.value.exercise)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(u.a),s.Ob(n.h))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-new-training"]],decls:14,vars:11,consts:[["fxLayout","","fxLayoutAlign","center",1,"new-training"],[3,"ngSubmit"],["f","ngForm"],["fxFlex.xs","100%","fxFlex","400px"],["fxLayoutAlign","center"],[4,"ngIf"],["fxLayoutAlign","center",4,"ngIf"],["placeholder","Choose Exercise","ngModel","","name","exercise","required",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","submit","mat-button","",3,"disabled",4,"ngIf"],["type","button","mat-button","",3,"click",4,"ngIf"],["type","submit","mat-button","",3,"disabled"],["type","button","mat-button","",3,"click"]],template:function(t,e){if(1&t){const t=s.Vb();s.Ub(0,"section",0),s.Ub(1,"form",1,2),s.cc("ngSubmit",function(){s.sc(t);const c=s.qc(2);return e.onStartTraining(c)}),s.Ub(3,"mat-card",3),s.Ub(4,"mat-card-title",4),s.zc(5,"Time to start a workout!"),s.Tb(),s.Ub(6,"mat-card-content",4),s.yc(7,U,4,3,"mat-form-field",5),s.hc(8,"async"),s.hc(9,"async"),s.yc(10,v,1,0,"mat-spinner",5),s.hc(11,"async"),s.Tb(),s.yc(12,w,5,6,"mat-card-actions",6),s.hc(13,"async"),s.Tb(),s.Tb(),s.Tb()}2&t&&(s.Db(7),s.lc("ngIf",s.ic(8,3,!s.ic(9,5,e.isLoading$)&&e.exercises$)),s.Db(3),s.lc("ngIf",s.ic(11,7,e.isLoading$)),s.Db(2),s.lc("ngIf",!s.ic(13,9,e.isLoading$)))},directives:[m.c,m.b,p.u,p.o,p.p,f.a,m.a,f.e,f.c,o.m,d.c,g.a,p.n,p.q,p.s,o.l,h.m,y.c,f.b,T.a],pipes:[o.b],styles:[".new-training[_ngcontent-%COMP%]{padding:30px}"]}),t})();var z=c("M9IT"),C=c("Dh3D"),O=c("+0xr"),$=c("qFsG");function L(t,e){1&t&&(s.Ub(0,"mat-header-cell",14),s.zc(1,"Date"),s.Tb())}function k(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.zc(1),s.hc(2,"date"),s.Tb()),2&t){const t=e.$implicit;s.Db(1),s.Ac(s.ic(2,1,t.date.toDate()))}}function A(t,e){1&t&&(s.Ub(0,"mat-header-cell",14),s.zc(1,"Name"),s.Tb())}function F(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.zc(1),s.Tb()),2&t){const t=e.$implicit;s.Db(1),s.Ac(t.name)}}function P(t,e){1&t&&(s.Ub(0,"mat-header-cell",14),s.zc(1,"Calories"),s.Tb())}function R(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.zc(1),s.hc(2,"number"),s.Tb()),2&t){const t=e.$implicit;s.Db(1),s.Ac(s.ic(2,1,t.calories))}}function E(t,e){1&t&&(s.Ub(0,"mat-header-cell",14),s.zc(1,"Duration"),s.Tb())}function M(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.zc(1),s.hc(2,"number"),s.Tb()),2&t){const t=e.$implicit;s.Db(1),s.Ac(s.ic(2,1,t.duration))}}function q(t,e){1&t&&(s.Ub(0,"mat-header-cell",14),s.zc(1,"State"),s.Tb())}function j(t,e){if(1&t&&(s.Ub(0,"mat-cell"),s.zc(1),s.Tb()),2&t){const t=e.$implicit;s.Db(1),s.Ac(t.state)}}function N(t,e){1&t&&s.Pb(0,"mat-header-row")}function B(t,e){1&t&&s.Pb(0,"mat-row")}const K=function(){return[10,20,30]};let V=(()=>{class t{constructor(t,e){this.trainingService=t,this.store=e,this.displayedColumns=["date","name","duration","calories","state"],this.dataSource=new O.k}ngOnInit(){this.store.select(r.c).subscribe(t=>{this.dataSource.data=t}),this.trainingService.fetchCompletedOrCancelledExercises()}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}doFilter(t){this.dataSource.filter=t.trim().toLowerCase()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(u.a),s.Ob(n.h))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-past-trainings"]],viewQuery:function(t,e){if(1&t&&(s.Cc(C.a,1),s.Cc(z.a,1)),2&t){let t;s.pc(t=s.dc())&&(e.sort=t.first),s.pc(t=s.dc())&&(e.paginator=t.first)}},decls:22,vars:6,consts:[["fxLayoutAlign","center center"],["fxFlex","40%"],["matInput","","type","text","placeholder","Filter",3,"keyup"],["matSort","",3,"dataSource"],["matColumnDef","date"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","calories"],["matColumnDef","duration"],["matColumnDef","state"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["mat-sort-header",""]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"mat-form-field",1),s.Ub(2,"input",2),s.cc("keyup",function(t){return e.doFilter(t.target.value)}),s.Tb(),s.Tb(),s.Tb(),s.Ub(3,"mat-table",3),s.Sb(4,4),s.yc(5,L,2,0,"mat-header-cell",5),s.yc(6,k,3,3,"mat-cell",6),s.Rb(),s.Sb(7,7),s.yc(8,A,2,0,"mat-header-cell",5),s.yc(9,F,2,1,"mat-cell",6),s.Rb(),s.Sb(10,8),s.yc(11,P,2,0,"mat-header-cell",5),s.yc(12,R,3,3,"mat-cell",6),s.Rb(),s.Sb(13,9),s.yc(14,E,2,0,"mat-header-cell",5),s.yc(15,M,3,3,"mat-cell",6),s.Rb(),s.Sb(16,10),s.yc(17,q,2,0,"mat-header-cell",5),s.yc(18,j,2,1,"mat-cell",6),s.Rb(),s.yc(19,N,1,0,"mat-header-row",11),s.yc(20,B,1,0,"mat-row",12),s.Tb(),s.Pb(21,"mat-paginator",13)),2&t&&(s.Db(3),s.lc("dataSource",e.dataSource),s.Db(16),s.lc("matHeaderRowDef",e.displayedColumns),s.Db(1),s.lc("matRowDefColumns",e.displayedColumns),s.Db(1),s.lc("pageSize",5)("pageSizeOptions",s.mc(5,K)))},directives:[m.b,d.c,m.a,$.b,O.j,C.a,O.c,O.e,O.b,O.g,O.i,z.a,O.d,C.b,O.a,O.f,O.h],pipes:[o.e,o.f],styles:[""]}),t})();var X=c("0IaG");let G=(()=>{class t{constructor(t){this.passedData=t}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(X.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-stop-training"]],decls:10,vars:3,consts:[["mat-dialing-title",""],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(s.Ub(0,"h1",0),s.zc(1,"Are you sure!"),s.Tb(),s.Ub(2,"mat-dialog-content"),s.Ub(3,"p"),s.zc(4),s.Tb(),s.Tb(),s.Ub(5,"mat-dialog-actions"),s.Ub(6,"button",1),s.zc(7,"Yes"),s.Tb(),s.Ub(8,"button",1),s.zc(9,"No"),s.Tb(),s.Tb()),2&t&&(s.Db(4),s.Bc("You already got ",e.passedData.progress,"%"),s.Db(2),s.lc("mat-dialog-close",!0),s.Db(2),s.lc("mat-dialog-close",!1))},directives:[X.e,X.c,T.a,X.d],encapsulation:2}),t})();var H=c("IzEk");let J=(()=>{class t{constructor(t,e,c){this.dialog=t,this.trainingService=e,this.store=c,this.progress=0}ngOnInit(){this.startOrResumeTimer()}startOrResumeTimer(){this.store.select(r.a).pipe(Object(H.a)(1)).subscribe(t=>{this.timer=setInterval(()=>{this.progress=this.progress+1,this.progress>=100&&(this.trainingService.completeExercise(),clearInterval(this.timer))},t.duration/100*1e3)})}onStop(){clearInterval(this.timer),this.dialog.open(G,{data:{progress:this.progress}}).afterClosed().subscribe(t=>{t?this.trainingService.cancelExercise(this.progress):this.startOrResumeTimer()})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(X.b),s.Ob(u.a),s.Ob(n.h))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-current-training"]],decls:8,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"current-training"],["mode","determinate",3,"value"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(s.Ub(0,"section",0),s.Pb(1,"mat-progress-spinner",1),s.Ub(2,"h1"),s.zc(3),s.Tb(),s.Ub(4,"p"),s.zc(5,"Keep on going, you can do it!"),s.Tb(),s.Ub(6,"button",2),s.cc("click",function(){return e.onStop()}),s.zc(7,"Stop"),s.Tb(),s.Tb()),2&t&&(s.Db(1),s.lc("value",e.progress),s.Db(2),s.Bc("",e.progress,"%"))},directives:[m.c,m.b,y.a,T.a],styles:[".current-training[_ngcontent-%COMP%]{padding:30px}"]}),t})();function Q(t,e){1&t&&(s.Ub(0,"mat-tab-group"),s.Ub(1,"mat-tab",1),s.Pb(2,"app-new-training"),s.Tb(),s.Ub(3,"mat-tab",2),s.Pb(4,"app-past-trainings"),s.Tb(),s.Tb())}function Y(t,e){1&t&&s.Pb(0,"app-current-training")}const _=[{path:"",component:(()=>{class t{constructor(t){this.store=t}ngOnInit(){this.ongoingTraining$=this.store.select(r.d)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(n.h))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-training"]],decls:4,vars:6,consts:[[4,"ngIf"],["label","New Exercise"],["label","Past Exercises"]],template:function(t,e){1&t&&(s.yc(0,Q,5,0,"mat-tab-group",0),s.hc(1,"async"),s.yc(2,Y,1,0,"app-current-training",0),s.hc(3,"async")),2&t&&(s.lc("ngIf",!s.ic(1,2,e.ongoingTraining$)),s.Db(2),s.lc("ngIf",s.ic(3,4,e.ongoingTraining$)))},directives:[o.m,l.b,l.a,I,V,J],pipes:[o.b],styles:[""]}),t})()}];let W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({imports:[[a.c.forChild(_)],a.c]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({imports:[[i.a,W,n.i.forFeature("training",r.e)]]}),t})()}}]);