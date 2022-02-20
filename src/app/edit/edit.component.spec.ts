import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { By } from '@angular/platform-browser';
import * as Rx from 'rxjs';
import { EditComponent } from './edit.component';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from "@angular/router/testing";

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let service:ServiceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule], 
      providers:[ServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ServiceService); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should updateemp method called',(()=>{
    
    spyOn(service,'updateemp').and.callThrough()
   
    component.save()
    
    expect(service.updateemp).toHaveBeenCalled()
  }));
  
});
