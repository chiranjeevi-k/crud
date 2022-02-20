import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ServiceService } from '../service.service';
import { EmployeelistComponent } from './employeelist.component';
import { Employee } from '../employee';
import {delay, of} from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as Rx from 'rxjs';
import { asNativeElements, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('EmployeelistComponent', () => {
  let component: EmployeelistComponent;
  let fixture: ComponentFixture<EmployeelistComponent>;
  let  httpClientSpy: jasmine.SpyObj<HttpClient>; 
  let service:ServiceService
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeelistComponent ],
      imports: [HttpClientTestingModule], 
      providers:[ServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
    service = TestBed.inject(ServiceService); 
   
  });
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('is service instance created',()=>{
     expect(service instanceof ServiceService).toBeTruthy()
  })
  
  it("should employee array to be defined",()=>{
    expect(component.employees).toBeDefined()
   
  })
  
  it('should call ngOnInit', () => {
    spyOn(component,"getallemps").and.callThrough()
    component.ngOnInit();
    expect(component.employees).toEqual([]);
  })

  it('should getallemp function called',(()=>{
    spyOn(service,"getallemp").and.callThrough()
    component.getallemps();
    expect(service.getallemp).toHaveBeenCalled()
  
  }))

  it('should call getallemp and get response as empty array', fakeAsync(() => { 
    spyOn(service,"getallemp").and.callFake(() => {
      return Rx.of([]);
    });
    component.getallemps();
    expect(component.employees).toEqual([]);
  })) 

  it('should  get all emps and get response as array', fakeAsync(() => {
    spyOn(service,"getallemp").and.callFake(() => {
      return Rx.of([{id:1,name:'a',email:'whs@gmail.com',salary:451452,phone:2221222}]);
    });
     component.getallemps();
     fixture.detectChanges();
     let tablename = fixture.debugElement.query(By.css('#tablename')).nativeElement.innerText;
     console.log(tablename)
   
     expect(service.getallemp).toHaveBeenCalled();
     expect(component.employees).toEqual([{id:1,name:'a',email:'whs@gmail.com',salary:451452,phone:2221222}]);
    expect(tablename).toEqual('a')
  }));

   
  it('should  delete particular  emps and get response as array', fakeAsync(() => {
   
    component.employees.push({id:1,name:'a',email:'whs@gmail.com',salary:451452,phone:2221222})
    spyOn(service,"deleteemp").and.callFake(() => {
      return Rx.of(component.employees=component.employees.filter(emp=>{
        console.log(emp)
        return emp.id!==1
      }));
    });
    fixture.detectChanges();
    let buttonElement = fixture.debugElement.query(By.css('.delete')).nativeElement; 
    buttonElement.click()
    expect(component.employees).toEqual([])
    expect(service.deleteemp).toHaveBeenCalled();
    
   
  }));


});



// httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
// service = new ServiceService(httpClientSpy); 
// it('should return expected employees ', (done: DoneFn) => {
  //   const expectedemps: Employee[] =
  //     [{ id: 1, name: 'A',email:'whs@gmail.com',salary:451452,phone:2221222 }];
  
  //   httpClientSpy.get.and.returnValue(of(expectedemps))
  
  //   service.getallemp().subscribe({
  //     next: heroes => {
  //       expect(heroes)
  //         .toEqual(expectedemps);
  //       done();
  //     },
  //     error: done.fail
  //   });
  //   expect(httpClientSpy.get.calls.count())
     
  //     .toBe(1);
  // });