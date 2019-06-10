import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const basicAuthHeaderString = sessionStorage.getItem('token');

    if (basicAuthHeaderString) {
      req = req.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      });
    }


    return next.handle(req);
  }
}
