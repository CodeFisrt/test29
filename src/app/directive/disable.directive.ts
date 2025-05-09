import { AfterViewInit, Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDisable]'
})
export class DisableDirective implements OnChanges {
  

  @Input() isDisable: string =  'false';

  constructor(private eleref: ElementRef,private renderer: Renderer2) { 
    

  }

  ngOnChanges(): void {
    this.renderer.setAttribute(this.eleref.nativeElement, 'disabled', this.isDisable);
  }

}
