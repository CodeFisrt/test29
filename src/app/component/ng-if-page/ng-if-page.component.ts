import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ng-if-page',
  imports: [FormsModule, NgIf],
  templateUrl: './ng-if-page.component.html',
  styleUrl: './ng-if-page.component.css'
})
export class NgIfPageComponent {

  isDiv1Visiable: boolean =  false;

  div2Status: string = "Hidden";

  selectedCast: string = "";

  city1: string = '';
  city2: string ='';

  chnageStatus(status: string) {
    debugger;
    this.div2Status = status;
  }

}
