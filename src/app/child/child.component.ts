import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('msg')message:string;
  @Input('cellno') phoneNumber:number;
  @Output() eventMessage=new EventEmitter<string>();
  constructor() { 
   
  }

  ngOnInit() {
  }

   sendData(){
     this.eventMessage.emit("Good How about You?");
   }
}
