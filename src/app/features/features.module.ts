import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { EquitySubGroupComponent } from './equity-subgroup/equity-subgroup.component';
import { FeaturesComponent } from './features.component';
import { TemplateModule } from '../template/template.module';
import { EquitySubgroupFormComponent } from './equity-subgroup/components/equity-subgroup-form/equity-subgroup-form.component';


@NgModule({
  declarations: [
    EquitySubGroupComponent,
    FeaturesComponent,
    EquitySubgroupFormComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TemplateModule
  ]
})
export class FeaturesModule { }
