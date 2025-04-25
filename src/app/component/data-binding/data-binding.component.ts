import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,NgIf],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Angular";
  isActive = false;
  courserName = "react"
  currentDate: Date;
  inputType: string = "checkbox"
  placeHolderText = "Enter Some Name";
  selectedCity = "Pune"
  courseDuration : string = "2 Months";
  constructor() {
    this.currentDate = new Date();
    setTimeout(() => {
        this.courserName = "DOT nNet";
    }, 6000);
  }

  num1: string = "";
  num2: string = "";
  result: any = null;
  // onCourseDurationCHnage(event:any) {
  //   this.courseDuration = event.target.value;
  //   console.log("duration changed")
  // }

  onAdd() {
    const addtion =parseInt(this.num1) +  parseInt(this.num2);
    debugger
    this.result = addtion;
  }
  showWelcomeMessage() {
    alert("Welcome B-29")
  }

  showMessage(message:string) {
    debugger;
    this.firstName = message;
    alert(message)
  }
  onCityChange() {
    alert("City Got Changed")
  }

  cityChnaged(event:any) {
    debugger;
    alert(event.target.value)
  }

  onMouseIn() {
    console.log("MOuse Netered in DIv")
  }
  onMOuseLeft() {
    console.log("Mouse Left Div")
  }

}
