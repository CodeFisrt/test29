import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BankService } from '../../services/bank.service';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnDestroy {

  userDataList: any[] = []
  http = inject(HttpClient);
  bankServioce = inject(BankService);
  subscriptionArray: Subscription []= [];
  userList$: Observable<any[]> =  new Observable<any[]>;
  showTable: boolean = false;
  userFrom: FormGroup = new FormGroup({ 
      userId : new FormControl(0),
      userName: new FormControl("" ,[Validators.required,Validators.minLength(4)]),
      emailId: new FormControl("",[Validators.required,Validators.email]),
      fullName: new FormControl(""),
      password: new FormControl("")
  })
  ngOnInit(): void { 
    debugger;
    this.userList$ = this.bankServioce.getJsponUser();
    const add =  this.bankServioce.addTwoNo(12,12);
    const resu = this.bankServioce.getAllUsers();
    debugger;
    this.getUsers()
  }
 
  getUsers() {
    debugger;
    const getUSer = this.bankServioce.getAllUsers().subscribe((Res:any)=>{
      debugger;
      this.userDataList = Res.data;
    })
    this.subscriptionArray.push(getUSer)
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
    const formObj = this.userFrom.value;
    debugger;
    this.subscriptionArray.push(this.bankServioce.saveUser(formObj).subscribe((resukt: any) => {
      debugger;
      if (resukt.result) {
        alert("User created Succes");
        this.getUsers()
      } else {
        alert(resukt.message)
      }
    })
  )
    
    
  }

  ngOnDestroy(): void {
    this.subscriptionArray.forEach(sub=>{
      sub.unsubscribe()
    })
  }
}
