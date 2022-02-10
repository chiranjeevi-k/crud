import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any
  loaded:boolean=false
  form!:FormGroup
  constructor(public activated:ActivatedRoute,public service:ServiceService,public fb:FormBuilder,public router:Router) { }
  employee:any
  ngOnInit(): void {
    this.activated.params.subscribe(d=>{
      this.id=d['id']
      console.log(this.id)
    })

    this.service.getemp(this.id).subscribe(d=>{
      this.employee=d
      console.log(this.employee)
      this.form=this.fb.group({
        name:[this.employee.name],
        email:[this.employee.email],
        salary:[this.employee.salary],
        phone:[this.employee.phone]
      })
     })

     
   
    this.loaded=true
     
  }



  save(){
    this.service.updateemp(this.form.value,this.id).subscribe(d=>{
      console.log(d)   
      this.router.navigate(['']) 
    })
    
   
  }
 
   
  
}
