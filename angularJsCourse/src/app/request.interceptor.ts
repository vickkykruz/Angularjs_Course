import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // console.log('Request Interceptor: ',request);
    // Using this u can't modify teh orginal request, but u can clone it then modify it. E.g
    const newRequest = request.clone({
      headers: new HttpHeaders({ token: '1234567890' }),
    });
    // It can used to specifed a centen method
    if(request.method === 'POST'){
      const newRequest = request.clone({
        headers: new HttpHeaders({ token: '1234567890' }),
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
