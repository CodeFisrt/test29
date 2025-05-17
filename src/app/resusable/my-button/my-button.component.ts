import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

  private btnTitle: string = '';

  @Input()
  set title(value: string) {
    debugger;
    console.log('Input value changed:', value);
    this.btnTitle = value.toUpperCase();
  }

  get title(): string {
    return this.btnTitle;
  }

  btnClassName = input<string>("");



  @Output() onBtnClick = new EventEmitter<string>();

  btnClicked() {
    debugger;
    const currentDate = new Date();

    this.onBtnClick.emit(currentDate.getTime().toString());
  }
}
