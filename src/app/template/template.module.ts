import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthenticationFormComponent } from './sidebar/components/authentication-form/authentication-form.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressSpinnerInterceptor } from './progress-spinner/interceptors/progress-spinner.interceptor';


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
  DropdownModule,
  InputTextModule,
  MessageModule,
  MessagesModule,
  PaginatorModule,
  ProgressSpinnerModule,
  TableModule,
  TabViewModule,
  ToastModule
];

@NgModule({
  declarations: [
    TemplateComponent,
    SidebarComponent,
    AuthenticationFormComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    ...commonModules,
    ...primeNgModules
  ],
  exports: [
    TemplateComponent,
    ...commonModules,
    ...primeNgModules
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProgressSpinnerInterceptor,
      multi: true
    },
  ]
})
export class TemplateModule { }
