 
export class Employee{
    //properties
  eid:number;
  ename:string;
  esalary:number;
  //constructor
  constructor(eid:number,ename:string,esalary:number){
      this.eid=eid;
      this.ename=ename;
      this.esalary=esalary;
  }
  //methods
  display():void{
      console.log('inside the  display  function');
  }
}