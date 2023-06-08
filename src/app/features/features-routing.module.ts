import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquitySubGroupComponent } from './equity-subgroup/equity-subgroup.component';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', component: EquitySubGroupComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
