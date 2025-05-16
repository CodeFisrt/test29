import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, filter, forkJoin, switchMap } from 'rxjs';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { MyButtonComponent } from '../../resusable/my-button/my-button.component';
@Component({
  selector: 'app-admin',
  imports: [JsonPipe,SelectModule, FormsModule, ReactiveFormsModule,DatePickerModule, MyButtonComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  searchBox: string = "";
  searchControl = new FormControl("");
  date: Date= new Date();
  minDate: Date = new Date();
  newMindata: Date;
  cities: any[]  = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

    selectedCity: any | undefined;

  http = inject(HttpClient);
  productList: any[] = [];

  constructor() { 
    const d = new Date(this.minDate);
    d.setMonth(3);
    //const monthbackData = this.minDate.setMonth(-1);
    this.newMindata = d 
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter(searchText => searchText != undefined ? searchText.trim().length > 3 : false),
      switchMap(res => this.http.get("https://jsonplaceholder.typicode.com/users?search=" + res))
    ).subscribe((response: any) => {
      console.log(response)
    })
   
  }
  onDateSelect() {
    console.log('date se;evcted')
  }

  ngOnInit(): void {
    const users$ =  this.http.get("https://jsonplaceholder.typicode.com/users");
    const comments$ =  this.http.get("https://jsonplaceholder.typicode.com/commentsadasd");
    const photos$ =  this.http.get("https://jsonplaceholder.typicode.com/photos");
   
    forkJoin([users$,comments$,photos$]).subscribe((res:any)=>{
      debugger;
    })
  }

  // serachProduct(searchText: any) {
  //   debugger;
  //   this.http.get("https://dummyjson.com/products/search?q=" + searchText).subscribe({
  //     next: (res: any) => {
  //       this.productList = res;
  //     },
  //     error: (error: any) => {

  //     }
  //   })



  //   // this.http.get("https://dummyjson.com/products/search?q=phone").subscribe((Res:any)=>{

  //   // },error=>{

  //   // })
  // }

}
