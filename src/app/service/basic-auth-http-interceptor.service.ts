import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor(private route:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(sessionStorage.getItem("username") && sessionStorage.getItem("token")){
      req = req.clone({
        headers: req.headers.set("Authorization",
        'Bearer ' + sessionStorage.getItem("token"))
         
        }
      )
    }
    return next.handle(req)
  }
}
