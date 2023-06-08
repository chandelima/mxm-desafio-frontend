import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { EquitySubGroupComponent } from './equity-subgroup/equity-subgroup.component';
import { FeaturesComponent } from './features.component';
import { TemplateModule } from '../template/template.module';


@NgModule({
  declarations: [
    EquitySubGroupComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TemplateModule
  ]
})
export class FeaturesModule { }
