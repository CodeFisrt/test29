import { Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { VariableComponent } from './component/variable/variable.component';
import { DepartmentComponent } from './component/department/department.component';
import { DesignationComponent } from './component/designation/designation.component';
import { UserComponent } from './component/user/user.component';
import { NgIfPageComponent } from './component/ng-if-page/ng-if-page.component';
import { NgforPageComponent } from './component/ngfor-page/ngfor-page.component';
import { ControlStatementComponent } from './component/control-statement/control-statement.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { NgclassStyleComponent } from './component/ngclass-style/ngclass-style.component';
import { PipeExComponent } from './component/pipe-ex/pipe-ex.component';
import { LifeCycleComponent } from './component/life-cycle/life-cycle.component';
import { GetApiComponent } from './component/get-api/get-api.component';
import { PostRecordComponent } from './component/post-record/post-record.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"data-binding",
        pathMatch:'full'
    },
    {
        path: "admin-page",
        component: AdminComponent,
        title:"Admin Page"
    },
    {
        path:"data-binding",
        component: DataBindingComponent,
         title:"Data Binding "
    },
    {
        path:"variables",
        component:VariableComponent,
        title:"Variables"
    },
    {
        path:"dept",
        component:DepartmentComponent
    },
    {
        path:"get-api",
        component:GetApiComponent
    },
    {
        path:"post-api",
        component:PostRecordComponent
    },
    {
        path:"reactiveForm",
        component:ReactiveFormComponent
    },
    {
        path:'designation',
        component:DesignationComponent
    }
    ,{
        path:"user",
        component:UserComponent
    },
    {
        path:"ng-if",
        component:NgIfPageComponent
    },
    {
        path:"ng-for",
        component:NgforPageComponent
    },
    {
        path:"controlflow",
        component:ControlStatementComponent
    },
    {
        path:"ngclassstyle",
        component:NgclassStyleComponent
    },
    {
        path:"pipe",
        component:PipeExComponent
    },
    {
        path:"life-cycle",
        component:LifeCycleComponent
    },
    {
        path:"**",
        component:NotFoundComponent,
        title:"Not Found"
    }

];