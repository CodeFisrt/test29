import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-array.component.html',
  styleUrl: './reactive-form-array.component.css'
})
export class ReactiveFormArrayComponent {

  employeeForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    department: new FormControl(""),
    familyList:  new FormArray([])
  })

  constructor() {

  }

  addFamilyGroup() {
    const familyForm = new FormGroup({
      name: new FormControl(""),
      relation: new FormControl(""),
      age: new FormControl(""),
    });
    this.getFamilyList.push(familyForm)

  }

  get getFamilyList() {
    return this.employeeForm.controls['familyList'] as FormArray;
  }

  onSaveEmp() {
    const FormValue =  this.employeeForm.value;
    debugger;
  }

  removeFamily(index:number) {
    debugger;
    const formArray  =  this.employeeForm.controls['familyList'] as FormArray;
    formArray.removeAt(index);
 
  }

}
