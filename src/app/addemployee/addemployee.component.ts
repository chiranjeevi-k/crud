import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  form!:FormGroup
  empmodelobj:Employee =new Employee()
  constructor(public fb:FormBuilder,public service:ServiceService) {

   }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:[''],
      email:[''],
      salary:[''],
      phone:['']
    })
  }
  add(){
   this.empmodelobj.name=this.form.value.name;
   this.empmodelobj.email=this.form.value.email;
   this.empmodelobj.salary=this.form.value.salary;
   this.empmodelobj.phone=this.form.value.phone;
   

   this.service.postemp(this.empmodelobj).subscribe(d=>{
     console.log(d)
   },err=>{
     alert(err)
   })
   alert("employee added successfully")
   this.form.reset()
  }

}
