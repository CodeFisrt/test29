import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  imports: [FormsModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy,OnChanges,DoCheck {

  first: string = ''
  last : string;

  constructor() {
    debugger;
    this.last ="ass";
  }

  ngOnInit(): void {
    debugger;
    console.log("ngOnInit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    console.log("ngOnChanges")
  }
  showAler(){
    console.log("asdasd")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  

  getSum():number {
    debugger;
    return 0;
  }


}
