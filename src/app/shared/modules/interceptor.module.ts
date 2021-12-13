import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  HttpClientModule, 
  HTTP_INTERCEPTORS } 
from '@angular/common/http';
import { HttpResponseInterceptor } from '../interceptor/http-response.interceptor';
import { LoadingService } from '../loading/shared/loading.service';
import { MessageService } from '../message/shared/message.service';


const HTTP_CUSTOM_INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true , deps: [LoadingService, MessageService]}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: HTTP_CUSTOM_INTERCEPTORS
  
})
export class InterceptorModule { }
