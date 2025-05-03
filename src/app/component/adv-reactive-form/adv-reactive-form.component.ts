import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-adv-reactive-form',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './adv-reactive-form.component.html',
  styleUrl: './adv-reactive-form.component.css'
})
export class AdvReactiveFormComponent {

  userForm: FormGroup =  new FormGroup({});

  constructor(private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      userType: ['',[Validators.required]]
    })
    
    this.initializeForm();
    this.onTypeChnage();
    this.userForm.statusChanges.subscribe((res:any)=>{
     
    })
    this.userForm.controls['adminCode'].statusChanges.subscribe((res:any)=>{
      debugger;
    })
  }

  onTypeChnage() {
    this.userForm.controls['userType'].valueChanges.subscribe((type:string)=>{ 
      const adminCodeControl = this.userForm.controls['adminCode'] as FormControl;
      if(type == 'admin') {
        adminCodeControl.enable();
        adminCodeControl.addValidators(Validators.required);
      } else {
        adminCodeControl.setValue("");
        adminCodeControl.disable();
        adminCodeControl.removeValidators(Validators.required)
      }
      adminCodeControl.updateValueAndValidity();
    });
  }

  initializeForm() {
    this.userForm = new FormGroup({
      userType: new FormControl("",[Validators.required]),
      userName: new FormControl("",[Validators.required]),
      email: new FormControl(""),
      isPasswordRequired: new FormControl(false),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),
      adminCode: new FormControl("") ,
      isUserTypeReq : new FormControl(false)
    })

    this.userForm.controls['isUserTypeReq'].valueChanges.subscribe((res: boolean)=>{
      if(res) {
        this.userForm.controls['userType'].setValue("admin")
      }
    })
  }

}
