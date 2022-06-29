import { Component } from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     message:string="welcome to home page";
     message1:string="HELLO WORLD";
     myDate = new Date();
     salary:number=3000;
     setp:number=12.34;
     shareValue:number=0.3;
     objectRef:any[]=[
       {id:1002,name:'RAJU',salary:30000},
       {id:1001,name:'SUNIL',salary:40000},
       {id:1004,name:'RAMESH',salary:50000},
       {id:1003,name:'KIRAN',salary:60000},

      ];
      searchEmployee:any="";
     constructor(){
      
     }
     sortBasedEid(){
       alert('hi');
       let newobj=this.objectRef.sort((a,b)=>a.id-b.id);
       this.objectRef=newobj;
        
    }
     
}
