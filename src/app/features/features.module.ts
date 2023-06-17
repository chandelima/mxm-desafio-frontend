import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HeritageSubgroupComponent } from './heritage-subgroup/heritage-subgroup.component';
import { FeaturesComponent } from './features.component';
import { TemplateModule } from '../template/template.module';
import { HeritageSubgroupInfoComponent } from './heritage-subgroup/components/heritage-subgroup-info/heritage-subgroup-info.component';
import { HeritageSubgroupStatusComponent } from './heritage-subgroup/components/heritage-subgroup-status/heritage-subgroup-status.component';
import { ProcessingStatusComponent } from './processing-status/processing-status.component';


@NgModule({
  declarations: [
    HeritageSubgroupComponent,
    FeaturesComponent,
    HeritageSubgroupInfoComponent,
    HeritageSubgroupStatusComponent,
    ProcessingStatusComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TemplateModule
  ]
})
export class FeaturesModule { }
