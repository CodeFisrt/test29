import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-api',
  imports: [FormsModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent implements OnInit {

  userList: any[]=[];
  todoList: any[] = [];
  deptList: any [] =[];
  designationList: any [] =[];
  selectedDept: string = ''
  userDataList: any[]=[];
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    debugger;
    this.getEmployee()
    this.getDepartments()
    this.getUsers();
  }


  getUsers() {
    this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers").subscribe((result:any)=>{
      debugger;
      this.userDataList = result.data;
    })
  }
  getDepartments() {
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments").subscribe((Res:any)=>{
      this.deptList = Res;
    })
  }
  getDesignationByDept() { 
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDesignationsByDeptId?deptId=" + this.selectedDept).subscribe((Res:any)=>{
      this.designationList = Res;
    })
  }
  getAllUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((respsone:any) => {
      debugger;
      this.userList = respsone;
    })
  }

  getToDoList() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((result: any)=>{
      debugger;
      this.todoList = result;
    })
  }
  getEmployee() {
    debugger;
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees").subscribe((Res:any)=>{
      debugger
    })
  }


}
