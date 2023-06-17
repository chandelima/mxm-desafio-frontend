import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HeritageSubgroupComponent } from './heritage-subgroup/heritage-subgroup.component';
import { TemplateModule } from '../template/template.module';
import { HeritageSubgroupInfoComponent } from './heritage-subgroup/components/heritage-subgroup-info/heritage-subgroup-info.component';
import { ProcessingStatusComponent } from './processing-status/processing-status.component';
import { HeritageGroupComponent } from './heritage-group/heritage-group.component';


@NgModule({
  declarations: [
    HeritageSubgroupComponent,
    HeritageSubgroupInfoComponent,
    ProcessingStatusComponent,
    HeritageGroupComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TemplateModule
  ]
})
export class FeaturesModule { }
