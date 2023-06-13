import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { EquitySubGroupComponent } from './equity-subgroup/equity-subgroup.component';
import { FeaturesComponent } from './features.component';
import { TemplateModule } from '../template/template.module';
import { EquitySubgroupFormComponent } from './equity-subgroup/components/equity-subgroup-form/equity-subgroup-form.component';
import { EquitySubgroupStatusComponent } from './equity-subgroup-status/equity-subgroup-status.component';
import { EquitySubgroupInfoComponent } from './equity-subgroup/components/equity-subgroup-info/equity-subgroup-info.component';


@NgModule({
  declarations: [
    EquitySubGroupComponent,
    FeaturesComponent,
    EquitySubgroupFormComponent,
    EquitySubgroupStatusComponent,
    EquitySubgroupInfoComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TemplateModule
  ]
})
export class FeaturesModule { }
