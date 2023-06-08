import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const primeNgModules: Array<any> = [];

@NgModule({
  declarations: [
    TemplateComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    ...primeNgModules
  ],
  exports: [
    TemplateComponent,
    ...primeNgModules
  ]
})
export class TemplateModule { }
