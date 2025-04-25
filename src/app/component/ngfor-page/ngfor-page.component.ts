import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-page',
  imports: [NgFor,NgIf,NgStyle],
  templateUrl: './ngfor-page.component.html',
  styleUrl: './ngfor-page.component.css'
})
export class NgforPageComponent {
  cityList : string[] = ["Pune","Nagpur","Jaipur","Bhopal"];
  boolenaList: boolean []= [true, true, false, false, true];
  isTableView: boolean = true;
  studentList: any []= [
    {name:"AAA",city:"Pune",mobile:"9988776677", isActiveL:false,grade:"B",attendance:90},
    {name:"BBB",city:"Pune",mobile:"768453322", isActiveL:false,grade:"B",attendance:70},
    {name:"CCC",city:"Mumbai",mobile:"66535", isActiveL:true,grade:"A",attendance:100},
    {name:"DDD",city:"Pune",mobile:"435345", isActiveL:false,grade:"B",attendance:60},
    {name:"EEE",city:"Jaipur",mobile:"34534534", isActiveL:true,grade:"C",attendance:50},
    {name:"FFF",city:"Bhopal",mobile:"123123123", isActiveL:false,grade:"D",attendance:20}
  ]
}
