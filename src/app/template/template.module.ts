import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const commonModules = [
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule
];

const primeNgModules = [
  ButtonModule,
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
    SidebarComponent
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
    ConfirmationService,
    MessageService
  ]
})
export class TemplateModule { }
