"use strict";(self.webpackChunkSMS_Neptune=self.webpackChunkSMS_Neptune||[]).push([[688],{1128:(v,d,i)=>{i.d(d,{l:()=>p});var c=i(7009),s=i(4650);let f=(()=>{class t{constructor(r){this.data=r}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)(s.Y36(c.qD))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-notifier"]],decls:4,vars:2,template:function(r,l){1&r&&(s.TgZ(0,"div"),s._uU(1),s.qZA(),s.TgZ(2,"div"),s._uU(3),s.qZA()),2&r&&(s.xp6(1),s.hij(" ",l.data.type,"\n"),s.xp6(2),s.hij(" ",l.data.message,"\n"))}}),t})(),p=(()=>{class t{constructor(r){this.snackBar=r}showNotification(r,l,u){this.snackBar.openFromComponent(f,{data:{message:r,buttonText:l,type:u},duration:5e3,horizontalPosition:"center",verticalPosition:"bottom",panelClass:u})}}return t.\u0275fac=function(r){return new(r||t)(s.LFG(c.ux))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1688:(v,d,i)=>{i.r(d),i.d(d,{QuickSmsModule:()=>S});var c=i(4006),s=i(6895),f=i(7392),p=i(9299),t=i(4650),m=i(5412),r=i(4859),l=i(1572);function u(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"p"),t._uU(2,"Do you wish to continue?"),t.qZA(),t.TgZ(3,"div",3)(4,"button",4),t.NdJ("click",function(){t.CHM(e);const g=t.oxw();return t.KtG(g.onNoClick())}),t._uU(5,"Close"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(e);const g=t.oxw();return t.KtG(g.send())}),t._uU(7,"Yes"),t.qZA()()()}}function M(n,a){1&n&&t._UZ(0,"mat-spinner",6)}let b=(()=>{class n{constructor(e){this.dialogRef=e,this.sms={sender:"",receiver:"",message:""},this.isLoading=!1}send(){this.dialogRef.close("send")}onNoClick(){this.dialogRef.close()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sms-dialog"]],decls:3,vars:2,consts:[["mat-dialog-content","",1,"dialog-content",2,"margin","0 auto"],[4,"ngIf"],["diameter","60","style","margin:0 auto;",4,"ngIf"],["mat-dialog-actions",""],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary","cdkFocusInitial","",1,"save_btn",3,"click"],["diameter","60",2,"margin","0 auto"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,u,8,0,"div",1),t.YNc(2,M,1,0,"mat-spinner",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",!o.isLoading),t.xp6(1),t.Q6J("ngIf",o.isLoading))},dependencies:[s.O5,r.lW,m.xY,m.H8,l.Ou],styles:[".dialog-content[_ngcontent-%COMP%]{max-width:500px}"]}),n})();var O=i(1325),_=i(1128),h=i(9549),C=i(3162);function P(n,a){1&n&&(t.TgZ(0,"div",11),t._UZ(1,"mat-progress-bar",12),t.qZA())}const k=[{path:"",component:(()=>{class n{constructor(e,o,g){this.dialog=e,this.quicksms=o,this.notifier=g,this.sms={sender:"Neptune",receiver:"",message:"",seqNo:""},this.isLoading=!1}ngOnInit(){}openDialog(){this.dialog.open(b,{width:"20%"}).afterClosed().subscribe(e=>{"send"===e&&(this.isLoading=!0,this.send({receiver:this.sms.receiver,message:this.sms.message}),this.resetForm())})}send(e){this.quicksms.sendMessages(e).subscribe(o=>{this.notifier.showNotification("Message sent","OK","success"),this.isLoading=!1},o=>{this.notifier.showNotification("An error occured, please try agan","OK","error"),this.isLoading=!1})}resetForm(){this.sms.receiver="",this.sms.message=""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.uw),t.Y36(O.G),t.Y36(_.l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-quick-sms"]],decls:20,vars:4,consts:[[1,"mat-elevation-z8"],[1,"title"],[1,"form"],[1,"form-field"],[1,"form-group"],["matInput","","name","receiver",3,"ngModel","ngModelChange"],[1,"form-message"],["matInput","","name","message",3,"ngModel","ngModelChange"],[1,"send"],["mat-raised-button","",3,"disabled","click"],["class","bar",4,"ngIf"],[1,"bar"],["mode","indeterminate"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1"),t._uU(3,"Quick SMS"),t.qZA()(),t.TgZ(4,"form",2)(5,"div",3)(6,"div",4)(7,"h1"),t._uU(8,"Receiver:"),t.qZA(),t.TgZ(9,"input",5),t.NdJ("ngModelChange",function(x){return o.sms.receiver=x}),t.qZA()(),t.TgZ(10,"mat-hint"),t._uU(11,"Receiver format e.g 2347081000000"),t.qZA()(),t.TgZ(12,"div",6)(13,"h1"),t._uU(14,"Message:"),t.qZA(),t.TgZ(15,"textarea",7),t.NdJ("ngModelChange",function(x){return o.sms.message=x}),t.qZA()(),t.TgZ(16,"div",8)(17,"button",9),t.NdJ("click",function(){return o.openDialog()}),t._uU(18,"Send"),t.qZA()(),t.YNc(19,P,2,0,"div",10),t.qZA()()),2&e&&(t.xp6(9),t.Q6J("ngModel",o.sms.receiver),t.xp6(6),t.Q6J("ngModel",o.sms.message),t.xp6(2),t.Q6J("disabled",!o.sms.sender||!o.sms.receiver||!o.sms.message),t.xp6(2),t.Q6J("ngIf",o.isLoading))},dependencies:[s.O5,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F,h.bx,r.lW,C.pW],styles:["body[_ngcontent-%COMP%]{background-color:#192a53}.login-container[_ngcontent-%COMP%]{background-repeat:no-repeat;background-size:100%;display:flex;justify-content:center;align-items:center;height:100vh}.form_common[_ngcontent-%COMP%]{border-radius:5px;background-color:#fff;box-shadow:-30px 30px 50px #00000052;text-align:center;font-size:larger}.f[_ngcontent-%COMP%]{padding:60px 110px}.form-group[_ngcontent-%COMP%]{margin-top:40px}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:840px}.input-lg[_ngcontent-%COMP%]{width:100%;border-radius:5px}.btn_common[_ngcontent-%COMP%]{width:100%;background-color:#192a53}#username[_ngcontent-%COMP%]{-moz-appearance:textfield-multiline;-webkit-appearance:textarea;border:1px solid gray;font:medium -moz-fixed;font:-webkit-small-control;overflow:auto;resize:both;width:25rem}#password[_ngcontent-%COMP%]{-moz-appearance:textfield-multiline;-webkit-appearance:textarea;border:1px solid gray;font:medium -moz-fixed;font:-webkit-small-control;overflow:auto;resize:both;width:100%;margin-bottom:20px;margin-top:-30px}.copyright[_ngcontent-%COMP%]{font-size:11px;color:#f1ebdf;margin:0 auto;padding:10px 0;text-align:center}.error[_ngcontent-%COMP%]{background-color:#f53d3d33;color:var(--text-color);padding:5px;text-align:center;margin-bottom:15px}.error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.mat-elevation-z8[_ngcontent-%COMP%]{border-radius:8px;margin-top:5rem;height:100%}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:60px;padding-top:48px;font-size:20px;text-transform:uppercase;display:flex;justify-content:center;align-content:center}.form[_ngcontent-%COMP%]{margin-top:2%;margin-bottom:50px}.form-group[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center;margin-right:100px}.form-group[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:18px;text-align:start;margin:5px 15px 0 0}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:600px;border:1px solid var(--primary-color);border-radius:0;height:42px}mat-hint[_ngcontent-%COMP%]{font-size:14.2px;display:flex;justify-content:flex-start;margin-left:26.9%}.form-message[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center;font-size:20px;margin-bottom:-5px;margin-top:40px;margin-right:100px}.form-message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-right:15px;text-align:center;font-size:18px}.form-message[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:600px;border:1px solid var(--primary-color);border-radius:0;height:192px}.send[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center;margin-top:40px}.send[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:45px;width:190px;margin-bottom:70px;background-color:#030320;color:#fff}.send[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#03032062}.bar[_ngcontent-%COMP%]{margin-top:5px;border-radius:10px}@media screen and (max-width: 768px){.form[_ngcontent-%COMP%]{margin:0 0 0 32px}mat-hint[_ngcontent-%COMP%]{font-size:.8rem;text-align:justify}}"]}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(k),p.Bz]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.ez,y,c.u5,f.Ps,h.lN,r.ot,m.Is,C.Cv,l.Cq]}),n})()}}]);