import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { IMessageResponse } from '../interfaces/imessage-response.interface';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        tap({
          next: (event) => {
            if (
              event instanceof HttpResponse &&
              event.body.Success === false &&
              event.body.Messages.length
            ) {
              event.body.Messages.forEach((msg: IMessageResponse) => {
                this.showBackendErrorMessage(msg.Message)
              });
            }
            return event;
        }}),
        catchError((error: HttpErrorResponse) => {
          console.error(error)
          return throwError(() => error);
        })
      )
  }

  showBackendErrorMessage(error: string): void {
    this.messageService.add({
      life: 5000,
      severity: 'error',
      summary: "Mensagem retornada pelo servidor",
      detail: error
    });
  }

  showBackendConnectionErrorMessage(): void {
    this.messageService.add({
      life: 5000,
      severity: 'error',
      summary: "Erro de conexão com o servidor",
      detail: `Verifique a sua conexão e tente novamente. Caso o problema
					 persista, contate o suporte.`
    });
  }
}
