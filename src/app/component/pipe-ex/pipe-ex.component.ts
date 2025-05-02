import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipe/na.pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,
    DatePipe,SlicePipe,JsonPipe,NaPipe],
  templateUrl: './pipe-ex.component.html',
  styleUrl: './pipe-ex.component.css'
})
export class PipeExComponent {

  firstName: string  = "chetan";

  courseDetails = "this IS ANGULAR Couser";

  currentDate: Date = new Date();

  cityList: string[]= ["Pune","Nagpur","Jqbalpur","jaipur","Thane"]
  studnObj: any = {
    name:"Chetan",
    city:"Nagpur",
    mobile:"222222"
  };
  changeNAme() {
    this.firstName = " Rahul";
  }

  userList: any[]= [
    {uName: "chetan221", city :'Pune' ,state:'', mobile: undefined,dob: null},
    {uName: "Rahul", city :'' ,state:'Maharashtra', mobile: "9999887766",dob: null},
    {uName: "Ram", city :'Pune' ,state:'', mobile: undefined,dob: "12-21-2022"},
    {uName: "Shyam", city :null ,state:'Punjab', mobile: undefined,dob: null}
  ]

  showAlert() {
    alert("Welpocme")
  }
}
