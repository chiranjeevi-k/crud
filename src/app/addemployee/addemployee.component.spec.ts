
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import * as Rx from 'rxjs';
import { Employee } from '../employee';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { ServiceService } from '../service.service';

import { AddemployeeComponent } from './addemployee.component';

fdescribe('AddemployeeComponent', () => {
  let component: AddemployeeComponent;
  let listcomponent:EmployeelistComponent
  let fixture: ComponentFixture<AddemployeeComponent>;
  let listfixture: ComponentFixture<EmployeelistComponent>;
  let service:ServiceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddemployeeComponent ],
     
      imports: [HttpClientTestingModule,ReactiveFormsModule], 
      providers:[ServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemployeeComponent);
    listfixture=TestBed.createComponent(EmployeelistComponent);
    component = fixture.componentInstance;
    listcomponent =  listfixture.componentInstance
    fixture.detectChanges();
    service = TestBed.inject(ServiceService); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
    it('should post emp method called',()=>{  
      spyOn(service,'postemp').and.callThrough()
      component.add()
      expect(service.postemp).toHaveBeenCalled()
    });

    it('should call add method on click  button', fakeAsync(() => {
      let buttonElement = fixture.debugElement.query(By.css('.send-button')).nativeElement; 
      spyOn(component, 'add');   
      buttonElement.click()  
      expect(component.add).toHaveBeenCalled();
    })); 

    it('should add data to employee array onclick button',fakeAsync(()=>{
      let buttonElement = fixture.debugElement.query(By.css('.send-button')).nativeElement; 
      let employees:Employee[]=[]
      let formname= component.form.controls['name'];
      formname.setValue('a');
      let formemail=component.form.controls['email'];
      formemail.setValue('whs@gmail.com');
      let formsal=component.form.controls['salary'];
      formsal.setValue(451452);
      let formphone=component.form.controls['phone'];
      formphone.setValue(2221222)
      let employee={
        id:1,
        name:formname.value,
        email:formemail.value,
        salary:formsal.value,
        phone:formphone.value
      }
      spyOn(service,"postemp").and.callFake(() => {
        return Rx.of(listcomponent.employees.push(employee));
      });
      buttonElement.click()
      expect(listcomponent.employees).toContain({id:1,name:'a',email:'whs@gmail.com',salary:451452,phone:2221222})
    }));



    it('sholud be form values null',(()=>{
      let buttonElement = fixture.debugElement.query(By.css('.send-button')).nativeElement;
      buttonElement.click();
      expect(component.form.value.name).toBeNull();
      expect(component.form.value.email).toBeNull();
      expect(component.form.value.salary).toBeNull();
      expect(component.form.value.phone).toBeNull();
    }))
    


});
