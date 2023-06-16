import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ProgressSpinnerService } from '../services/progress-spinner.service';

@Injectable()
export class ProgressSpinnerInterceptor implements HttpInterceptor {

  private activeRequests = 0;
  
  constructor(private progressSpinnerService: ProgressSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler)
  : Observable<HttpEvent<unknown>> {
    
    if(this.activeRequests === 0)
      this.progressSpinnerService.show();
    
    this.activeRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests--;
        
        if(this.activeRequests === 0)
          this.progressSpinnerService.hide();
      })
    );
  }
}
