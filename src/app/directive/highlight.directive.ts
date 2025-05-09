import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef: ElementRef) { 
    console.log("Hilght executed");
    
  }

  @HostListener("mouseover")
  onMouseOver() {
    this.eleRef.nativeElement.style.color = 'red'
  }

  @HostListener("click")
  oncli() {
   alert("clkcik")
  }


  @HostListener("mouseout")
  onMouseLeft() {
     this.eleRef.nativeElement.style.color = 'black'
  }
}
