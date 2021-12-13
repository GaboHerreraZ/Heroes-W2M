import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  filter, 
  map 
} from 'rxjs/operators';
import { LoadingService } from '../loading/shared/loading.service';
import { MessageService } from '../message/shared/message.service';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService,
              private messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.startLoading();
    return next.handle(request).pipe(
      filter(response => response instanceof HttpResponse),
      map(result => {
        if(request.method != 'GET') {
          this.messageService.setMessage({ type:'ok', message:'messages.ok'});
        }
        this.loadingService.stopLoading();
        return result;
      })
    );
  }
}
