import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template',
  imports: [NgFor,NgIf,NgTemplateOutlet],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  cityList: string []= ["Pune","Nagpur","Jaipur"];

  isShow= false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((Res:any)=>{
      debugger;
    });
    this.activatedRoute.queryParams.subscribe((res:any)=>{
      debugger;
    })
    const rouetDate = this.activatedRoute.data;
    debugger;
  }

}
