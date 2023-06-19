import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HeritageSubgroupComponent } from './heritage-subgroup/heritage-subgroup.component';
import { TemplateModule } from '../template/template.module';
import { HeritageSubgroupInfoComponent } from './heritage-subgroup/components/heritage-subgroup-info/heritage-subgroup-info.component';
import { ProcessingStatusComponent } from './processing-status/processing-status.component';
import { HeritageGroupComponent } from './heritage-group/heritage-group.component';
import { HeritageGroupInfoComponent } from './heritage-group/components/heritage-group-info/heritage-group-info.component';
import { HeritageGroupFormComponent } from './heritage-group/components/heritage-group-form/heritage-group-form.component';


@NgModule({
  declarations: [
    HeritageSubgroupComponent,
    HeritageSubgroupInfoComponent,
    ProcessingStatusComponent,
    HeritageGroupComponent,
    HeritageGroupInfoComponent,
    HeritageGroupFormComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TemplateModule
  ]
})
export class FeaturesModule { }
