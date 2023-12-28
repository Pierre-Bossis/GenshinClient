import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem("token") != "") {
      let clone = request.clone(
        {headers : new HttpHeaders({"authorization": "bearer "+ localStorage.getItem("token")})
      })

      return next.handle(clone)
    }

    return next.handle(request);
  }
}