import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }


  getallemp(){
    return this.http.get('http://localhost:3000/posts')
    
  }

  getemp(id:any){
    return this.http.get('http://localhost:3000/posts/'+id)
   
  }

  postemp(data:any){
      return this.http.post('http://localhost:3000/posts',data)
      
  }

  deleteemp(id:any){
     return this.http.delete('http://localhost:3000/posts/'+id)
  }

  updateemp(data:any,id:any){
    return this.http.put('http://localhost:3000/posts/'+id,data)
  }
}
