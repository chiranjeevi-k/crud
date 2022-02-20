import {Router,RouterLinkWithHref,ActivatedRoute,convertToParamMap} from '@angular/router'
import { routes } from './app-routing.module';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditComponent } from './edit/edit.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
fdescribe('Routing testing', () => {
    let router:Router
    let location:Location
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
   
    
   

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [ AddemployeeComponent ,EditComponent, EmployeelistComponent],
        imports: [RouterTestingModule.withRoutes(routes)], 
        providers:[]
        })
       
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        
        router =TestBed.get(Router)
        location = TestBed.get(Location)
        router.initialNavigation();
    });


    it('should test first route',fakeAsync(()=>{
        router.navigate([''])
        expect(location.path()).toEqual('')
    }));
    
     it('should navigate to add componenet onclick',fakeAsync(()=>{
       
       router.navigate(['add'])
        //let linkclick =fixture.debugElement.query(By.css('.add')).nativeElement;
        //fixture.detectChanges()

        // console.log(linkclick)
       
        tick()
        expect(location.path()).toBe('/add')
     }))

     it('should go to edit component',fakeAsync(()=>{
        router.navigate(['edit/2']);
        tick()
        expect(location.path()).toBe('/edit/2')
     }));

    
    
});