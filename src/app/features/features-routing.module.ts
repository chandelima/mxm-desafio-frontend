import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeritageGroupComponent } from './heritage-group/heritage-group.component';
import { HeritageSubgroupComponent } from './heritage-subgroup/heritage-subgroup.component';
import { ProcessingStatusComponent } from './processing-status/processing-status.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'heritage-subgroup', pathMatch: 'full' },
      { path: 'heritage-group', component: HeritageGroupComponent },
      { path: 'heritage-subgroup', component: HeritageSubgroupComponent },
      { path: 'processing-status', component: ProcessingStatusComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
