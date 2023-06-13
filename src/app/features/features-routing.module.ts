import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquitySubGroupComponent } from './equity-subgroup/equity-subgroup.component';
import { EquitySubgroupStatusComponent } from './equity-subgroup-status/equity-subgroup-status.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'equity-subgroup', pathMatch: 'full' },
      { path: 'equity-subgroup', component: EquitySubGroupComponent },
      { path: 'equity-subgroup/add', component: EquitySubGroupComponent },
      { path: 'equity-subgroup/:code', component: EquitySubGroupComponent },
      { path: 'equity-subgroup-status', component: EquitySubgroupStatusComponent },
      { path: 'equity-subgroup-status/:code', component: EquitySubgroupStatusComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
