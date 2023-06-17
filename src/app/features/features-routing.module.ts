import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { HeritageSubgroupComponent } from './heritage-subgroup/heritage-subgroup.component';
import { ProcessingStatusComponent } from './processing-status/processing-status.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', redirectTo: 'heritage-subgroup', pathMatch: 'full' },
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
