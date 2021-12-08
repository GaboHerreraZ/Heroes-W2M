import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpResponseInterceptor } from '../interceptor/http-response.interceptor';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../loading/shared/loading.service';


const HTTP_CUSTOM_INTERCEPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true , deps: [ToastrService, LoadingService]}
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
