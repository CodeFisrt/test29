import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userDataList: any[]=[]
  http = inject(HttpClient);

  userFrom: FormGroup = new FormGroup({ 
      userId : new FormControl(0),
      userName: new FormControl(""),
      emailId: new FormControl(""),
      fullName: new FormControl(""),
      password: new FormControl("")
  })
  ngOnInit(): void { 
    this.getUsers()
  }
  getUsers() {
    this.http.get("https://projectapi.gerasim.in/api/BankLoan/GetAllUsers").subscribe((result:any)=>{
      debugger;
      this.userDataList = result.data;
    })
  }

  onEdit(userObj: any) {
    this.userFrom = new FormGroup({
      userId : new FormControl(userObj.userId),
      userName: new FormControl(userObj.userName),
      emailId: new FormControl(userObj.emailId),
      fullName: new FormControl(userObj.fullName),
      password: new FormControl(userObj.password)
    })
  }
  onSaveUser() {
    debugger;
    const formObj =  this.userFrom.value;
    this.http.post("https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer",formObj).subscribe((res:any)=>{
      if(res.result) {
        alert("User created Succes");
        this.getUsers()
      } else {
        alert(res.message)
      }
    })
  }
}
