import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeritageSubgroupComponent } from './heritage-subgroup/heritage-subgroup.component';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', redirectTo: 'heritage-subgroup', pathMatch: 'full' },
      { path: 'heritage-subgroup', component: HeritageSubgroupComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
