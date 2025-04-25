import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngclass-style',
  imports: [NgClass,NgStyle, FormsModule,NgIf],
  templateUrl: './ngclass-style.component.html',
  styleUrl: './ngclass-style.component.css'
})
export class NgclassStyleComponent {

  div1ClassName: string = '';
  isDiv2Checked: boolean = false;
  div3Class: string = 'red';
  div3FontColor: string ="black"

  isFormVisiable: boolean = true;

  div1Color: string = "";

  myCss = {
    'background-color':"red",
    color:"white",
    width:"100px",
    height:"100px"
  }

  onAddDiv1Class(className: string) {
    this.div1ClassName =className;
    // if( className == 'bg-success') {
    //   this.div1Color ='green';
    // } else {
    //    this.div1Color ='red';
    // }
    this.div1Color = className == 'bg-success' ? 'green':'red'
  }

  showForm() {
    this.isFormVisiable =  true;
  }
  hideForm() {
    this.isFormVisiable = false;
  }

}
