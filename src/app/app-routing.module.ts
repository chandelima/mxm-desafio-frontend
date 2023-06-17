import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
			{
				path: '',
				loadChildren: () =>
					import('./features/features.module').then(m => m.FeaturesModule),
			}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
