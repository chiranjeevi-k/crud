import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees:any=[]
  constructor(public service:ServiceService) { }

  ngOnInit(): void {
    this.getallemps()

  }

  getallemps(){
    this.service.getallemp().subscribe(d=>{
      this.employees=d
    })
  }

   deleteempid(id:any){
       this.service.deleteemp(id).subscribe(d=>{
         alert("deleted successfully")
         this.getallemps()
       })
   }

}
