import { Component } from '@angular/core';
import { Router, RouterEvent, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { DepartmentComponent } from "./component/department/department.component";
import { AdminComponent } from "./component/admin/admin.component";
import { DesignationComponent } from './component/designation/designation.component';
import { VariableComponent } from "./component/variable/variable.component";
import { DataBindingComponent } from './component/data-binding/data-binding.component';
 

@Component({
  selector: 'app-root',
  imports: [VariableComponent,DataBindingComponent,RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test29';

  constructor(private router: Router){
    this.router.events.subscribe((event:any)=>{
      debugger;
    })
  }
}
