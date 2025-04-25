import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  isDiv1Visiable: boolean =  false;

  div2Status: string = "Hidden";

  selectedCast: string = "";

  dayStartChar: string = '';

  city1: string = '';
  city2: string ='';

  cityList : string[] = ["Pune","Nagpur","Jaipur","Bhopal"];

  boolenaList: boolean []= [true, true, false, false, true];

  isTableView: boolean = true;
  studentList: any []= [
    {name:"AAA",city:"Pune",mobile:"9988776677", isActiveL:false,grade:"B"},
    {name:"BBB",city:"Pune",mobile:"768453322", isActiveL:false,grade:"B"},
    {name:"CCC",city:"Mumbai",mobile:"66535", isActiveL:true,grade:"A"},
    {name:"DDD",city:"Pune",mobile:"435345", isActiveL:false,grade:"B"},
    {name:"EEE",city:"Jaipur",mobile:"34534534", isActiveL:true,grade:"C"},
    {name:"FFF",city:"Bhopal",mobile:"123123123", isActiveL:false,grade:"D"}
  ]

  chnageStatus(status: string) {
    debugger;
    this.div2Status = status;
    for(let item of this.cityList) {

    }
  }

}
