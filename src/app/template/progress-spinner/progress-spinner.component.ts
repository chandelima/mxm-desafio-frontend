import { Component } from '@angular/core';
import { ProgressSpinnerService } from './services/progress-spinner.service';


@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {

  constructor(public progressSpinnerService: ProgressSpinnerService) { }
}
