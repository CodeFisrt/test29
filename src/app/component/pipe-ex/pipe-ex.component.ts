import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,
    DatePipe,SlicePipe,JsonPipe],
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
  }
}
