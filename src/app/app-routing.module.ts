import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditComponent } from './edit/edit.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

export const routes: Routes = [
  
  {path:'add',component:AddemployeeComponent},

  {path:'',
  children:[
    {path:'',component:EmployeelistComponent},
    {path:'edit/:id',component:EditComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
