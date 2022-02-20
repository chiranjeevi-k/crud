import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { HeaderInterceptor } from './header.interceptor';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    AddemployeeComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
