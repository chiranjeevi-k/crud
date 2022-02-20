import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }


  getallemp(){
    return this.http.get<Employee[]>('http://localhost:3000/posts')
    
  }

  getemp(id:number){
    return this.http.get<Employee>('http://localhost:3000/posts/'+id)
   
  }

  postemp(data:Employee){
      return this.http.post('http://localhost:3000/posts',data)
      
  }

  deleteemp(id:number){
     return this.http.delete('http://localhost:3000/posts/'+id)
  }

  updateemp(data:Employee,id:number){
    return this.http.put('http://localhost:3000/posts/'+id,data)
  }
}
