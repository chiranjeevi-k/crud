import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Employee } from './employee';
import { ServiceService } from './service.service';


fdescribe('ServiceService', () => {
  let service: ServiceService;
  let httpcontroller:HttpTestingController;
  let url='http://localhost:3000'
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[ServiceService]
    });
    service=TestBed.inject(ServiceService)
    httpcontroller=TestBed.inject(HttpTestingController)
  });


  afterEach(()=>{
    httpcontroller.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 it('should get all employees',()=>{
   const allemps:Employee[]=[
    { id: 1, name: 'A',email:'whs@gmail.com',salary:451452,phone:2221222 },
    { id: 2, name: 'A',email:'whs@gmail.com',salary:451452,phone:2221222 }
   ];
   service.getallemp().subscribe(emps=>{
     expect(allemps).toBe(emps)
     console.log(emps)
     console.log(allemps)
   });
   const req=httpcontroller.expectOne(url+'/posts');
   expect(req.cancelled).toBeFalsy();
   expect(req.request.responseType).toEqual('json');

   req.flush(allemps)
 });




 it('should post data',()=>{
   const addemp:Employee={ id: 2, name: 'A',email:'whs@gmail.com',salary:451452,phone:2221222 };
    
   service.postemp(addemp).subscribe(emp=>{
    expect(emp).toBe(addemp)
  });
   
  const req=httpcontroller.expectOne(url+'/posts');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(addemp)
 })

 it('should get single emp data',()=>{
  const getemp:Employee={ id: 2, name: 'A',email:'whs@gmail.com',salary:451452,phone:2221222 };
   
  service.getemp(getemp.id).subscribe(emp=>{
   expect(getemp).toBe(emp)
 });
  
 const req=httpcontroller.expectOne(url+'/posts/'+getemp.id);
   expect(req.cancelled).toBeFalsy();
   expect(req.request.responseType).toEqual('json');
   req.flush(getemp)
});


it('should delete particular emp id data',()=>{
  const delemp:Employee={ id: 2, name: 'A',email:'whs@gmail.com',salary:451452,phone:2221222 };
   
  service.deleteemp(delemp.id).subscribe(emp=>{
   expect(emp).toBe(delemp)
 });
  
 const req=httpcontroller.expectOne(url+'/posts/'+delemp.id);
   expect(req.cancelled).toBeFalsy();
   expect(req.request.responseType).toEqual('json');
   req.flush(delemp)
});
 

it('should update particular emp id data',()=>{
  const updateemp:Employee={ id: 2, name: 'A',email:'whs@gmail.com',salary:451452,phone:2221222 };
   
  service.updateemp(updateemp,updateemp.id).subscribe(emp=>{
   expect(emp).toBe(updateemp)
 });
  
 const req=httpcontroller.expectOne(url+'/posts/'+updateemp.id);
   expect(req.cancelled).toBeFalsy();
   expect(req.request.responseType).toEqual('json');
   req.flush(updateemp)
});




 
});
















// it('should get all emps through the get option using HttpTestingController',()=>{
//   const allemps: Employee[] =
//   [{ id: 1, name: 'A',email:'whs@gmail.com',salary:451452,phone:2221222 },{ id: 2, name: 'A',email:'whs@gmail.com',salary:451452,phone:2221222 }];

//   service.getallemp().subscribe((res) => {  
//     expect(res).toEqual(allemps);
//   });

//   const req = httpController.expectOne({
//     method: 'GET',
//     url: `${url}/posts`,
//   });

//   req.flush(allemps);

// })



// it('should call addBook and the API should return the book that was added', () => {
//   const addemp={
//     id:2,
//     name:'b',
//     email:'whs@gmail.com',salary:451452,phone:2221222
//   }
//   service.postemp(addemp).subscribe((data) => {
//     expect(data).toEqual(addemp);
//   });

//   const req = httpController.expectOne({
//     method: 'POST',
//     url: `${url}/posts`,
//   });

//   req.flush(addemp);
// });


// it('should call deleteBook and return the book that was deleted from the API', () => {
//   const delemp={
//     id:1,
//     name:'b',
//     email:'whs@gmail.com',
//     salary:451452,
//     phone:2221222
//   }
//   service.deleteemp(delemp.id).subscribe((data) => {
//     expect(data).toEqual(delemp);
//   });

//   const req = httpController.expectOne({
//     method: 'DELETE',
//     url: `${url}/posts/${delemp.id}`,
//   });

//   req.flush(delemp);
// });
