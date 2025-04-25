import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-record',
  imports: [FormsModule,JsonPipe],
  templateUrl: './post-record.component.html',
  styleUrl: './post-record.component.css'
})
export class PostRecordComponent implements OnInit {

  newUser: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  };
  userDataList: any[]=[]

  http = inject(HttpClient);
  firstName = "Chetan";
  lastName = "Jogi";
  fullName = "";

  ngOnInit(): void {

    this.fullName = this.firstName +" " +this.lastName;
    this.getUsers()
  }
  getUsers() {
    this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers").subscribe((result:any)=>{
      debugger;
      this.userDataList = result.data;
    })
  }
  onSaveUser() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",this.newUser).subscribe((res:any)=>{
      if(res.result) {
        alert("User created Succes");
        this.getUsers()
      } else {
        alert(res.message)
      }
    })
  }
  onUpdateUser() {
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/updateuser",this.newUser).subscribe((res:any)=>{
      if(res.result) {
        alert("User Updated Succes");
        this.getUsers()
      } else {
        alert(res.message)
      }
    },error=>{
      
    })
  }

  onEdit(userObj: any) {
    this.newUser = userObj;
  }



  onDelete(id: number) {
    debugger;
    const isDelete =  confirm("Are you sure want to Delete ?" );

    if(isDelete == true) {
      this.http.delete("https://projectapi.gerasim.in/api/BankLoan/DeleteUserByUserId?userId=" + id).subscribe((res:any)=>{
        debugger;
        if(res.result) {
          alert("Record Delete");
          this.getUsers()
        } else {
          alert("record Not Found")
        }
      })
    }
   
  }

}
