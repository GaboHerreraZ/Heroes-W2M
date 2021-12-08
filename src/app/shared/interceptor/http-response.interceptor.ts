import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { filter, map } from 'rxjs/operators';
import { LoadingService } from '../loading/shared/loading.service';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor(private toastServie: ToastrService, private loadinService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadinService.startLoading();
    return next.handle(request).pipe(
      filter(response => response instanceof HttpResponse),
      map(result => {
        if(request.method != 'GET') {
          this.toastServie.success('Operación realizada correctamente');
        }
        this.loadinService.stopLoading();
        return result;
      })
    );
  }
}
