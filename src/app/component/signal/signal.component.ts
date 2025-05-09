import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [JsonPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  firstName = "Chetan";

  courseName = signal("AnguLAR");


  fee: number = 1233;

  courseFee = signal<number>(2222);

  cityList =  signal<string[]>(["Pune","Nagpur"]);

  studentObj =  signal<any>({name:"",city:"Pune"});

  constructor() {
   const name =  this.firstName;

   const city1 = ["Pune"]
   const city2 = ["Nagpur"]

   const newCity = [...city1,...city2];
   const suignalVal =  this.courseName();

   setTimeout(() => {
    this.courseFee.set(5000);
   }, 6000); 
  }

  addMumbai() {
    //this.cityList.set(["Pune","Nagpur","Mumbai"]);
    this.cityList.update(oldval => [...oldval,"Mumbai"]);

    this.studentObj.update(preVal => ({...preVal,name:'Ankit'}))
    
    setTimeout(() => {
      this.studentObj.set({name:'Punam', city:'Mumbai',state:'MH'})
    }, 4000);

  }

}
