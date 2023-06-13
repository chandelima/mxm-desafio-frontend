import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { TemplateComponent } from './template.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerInterceptor } from './progress-spinner/interceptors/progress-spinner.interceptor';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { HttpErrorInterceptor } from '../shared/interceptors/http-error.interceptor';
import { AuthenticationComponent } from './sidebar/components/authentication/authentication.component';


const commonModules = [
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule
];

const primeNgModules = [
  ButtonModule,
  CardModule,
  DialogModule,
  DividerModule,
  InputTextModule,
  MessagesModule,
  ProgressSpinnerModule,
  TableModule,
  ToastModule
];


@NgModule({
  declarations: [
    Error404Component,
    ProgressSpinnerComponent,
    SidebarComponent,
    TemplateComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...commonModules,
    ...primeNgModules
  ],
  exports: [
    TemplateComponent,
    ...commonModules,
    ...primeNgModules
  ],
  providers: [
    ConfirmationService,
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressSpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
  ]
})
export class TemplateModule { }
