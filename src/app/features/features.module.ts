import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HeritageSubgroupComponent } from './heritage-subgroup/heritage-subgroup.component';
import { FeaturesComponent } from './features.component';
import { TemplateModule } from '../template/template.module';
import { HeritageSubgroupFormComponent } from './heritage-subgroup/components/heritage-subgroup-form/heritage-subgroup-form.component';
import { HeritageSubgroupStatusComponent } from './heritage-subgroup/components/heritage-subgroup-status/heritage-subgroup-status.component';


@NgModule({
  declarations: [
    HeritageSubgroupComponent,
    FeaturesComponent,
    HeritageSubgroupFormComponent,
    HeritageSubgroupStatusComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TemplateModule
  ]
})
export class FeaturesModule { }
