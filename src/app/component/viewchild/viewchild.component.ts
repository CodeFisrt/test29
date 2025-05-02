import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
import { PipeExComponent } from "../pipe-ex/pipe-ex.component";

@Component({
  selector: 'app-viewchild',
  imports: [PipeExComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements OnInit,AfterViewInit {

  @ViewChild('txtName') myTextbox!: ElementRef;

  @ViewChild(PipeExComponent) pipeComp!: PipeExComponent;


  ngOnInit(): void {
    //const value = this.myTextbox.nativeElement.value;
  }
  ngAfterViewInit(): void {
    const value = this.myTextbox.nativeElement.value;
  }
  readVal() {
    debugger;
    if(this.pipeComp) {
      const sds =  this.pipeComp.firstName;
      this.pipeComp.showAlert();
    }
   
    const value = this.myTextbox.nativeElement.value;
    ///const val = document.getElementById("txtName")?.value;
  }
}
