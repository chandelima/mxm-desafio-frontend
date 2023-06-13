import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg: string;

          if (error.error instanceof ErrorEvent) {
            console.error('This is client side error', error);
            errorMsg = `Error: ${error.error.message}`;
          } else if (error.status === 0) {
            console.error("Can't connect with server", error);
            errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
            this.showBackendConnectionErrorMessage();
          } else {
            console.error('This is server side error', error);
            errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
            this.showBackendErrorMessage(error.error.message);
          }

          console.error(errorMsg);

          return throwError(() => errorMsg);
        })
      )
  }

  showBackendErrorMessage(error: string): void {
    this.messageService.add({
      life: 5000,
      severity: 'error',
      summary: "Mensagem retornada pelo servidor:",
      detail: error
    });
  }

  showBackendConnectionErrorMessage(): void {
    this.messageService.add({
      life: 5000,
      severity: 'error',
      summary: "Erro de conexão com o servidor!",
      detail: `Verifique a sua conexão e tente novamente. Caso o problema
					 persista, contate o suporte.`
    });
  }
}
