import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthenticationFormComponent } from './sidebar/components/authentication-form/authentication-form.component';
import { ToastModule } from 'primeng/toast';


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
  TableModule,
  ToastModule
];

@NgModule({
  declarations: [
    TemplateComponent,
    SidebarComponent,
    AuthenticationFormComponent
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
  ]
})
export class TemplateModule { }
