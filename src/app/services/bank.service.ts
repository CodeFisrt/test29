import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  loggedUserName: any;

  constructor(private http: HttpClient) { }

  addTwoNo(num1: number,num2: number) {
    debugger;
    return num1+ num2;
  }

  getAllUsers():Observable<any[]> {
    debugger;
    return this.http.get<any[]>("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers") 
  }

  saveUser(obj:any){
    debugger;
    return this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",obj)
  }

  getJsponUser() :Observable<any[]>{
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
  }
}
