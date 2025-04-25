import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  imports: [],
  templateUrl: './variable.component.html',
  styleUrl: './variable.component.css'
})
export class VariableComponent {

   firstName: string = "Chetan";
   startCharName: string = "C";
   textSample: string = "This is Sample text";

   rollNo: number = 123;
   productPrice: number = 12.50;

   isActive: boolean = true;
   isPresent: boolean = false;

   currenDate: Date = new Date();
  
    
  constructor(){
    debugger;
 
    this.firstName = "Rahul";
    this.textSample = "Some Text";
    console.log("Construcotr")

    console.log(this.currenDate);
    console.log(this.isActive)
    this.printName()
     
    
   
  }

  printName() {
    debugger;
    this.productPrice = 444;
    console.log(this.productPrice)
  }






}



