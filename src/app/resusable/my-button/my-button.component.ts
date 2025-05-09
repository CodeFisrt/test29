import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {

    @Input() btnTitle: string = '';
    @Input() btnClassName : string = '';

    @Output() onBtnClick = new EventEmitter<string>();

    btnClicked() {
      debugger;
      const currentDate = new Date();

      this.onBtnClick.emit(currentDate.getTime().toString());
    }
}
