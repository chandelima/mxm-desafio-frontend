import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHeritageGroupGetResponse } from '../../interfaces/iheritage-group-get-response';

@Component({
  selector: 'app-heritage-group-info',
  templateUrl: './heritage-group-info.component.html',
  styleUrls: ['./heritage-group-info.component.scss']
})
export class HeritageGroupInfoComponent {

  @Input() data?: IHeritageGroupGetResponse;
  @Output() setFormVisible = new EventEmitter<boolean>();
  @Input() formVisible = false;

  close() {
    this.setFormVisible.emit(false)
  }
}
