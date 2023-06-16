import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IHeritageSubgroupResponse } from '../../interfaces/iheritage-subgroup-response';


@Component({
  selector: 'app-heritage-subgroup-info',
  templateUrl: './heritage-subgroup-info.component.html',
  styleUrls: ['./heritage-subgroup-info.component.scss']
})
export class HeritageSubgroupInfoComponent {

  @Input() data?: IHeritageSubgroupResponse;
  @Output() setFormVisible = new EventEmitter<boolean>();
  @Input() formVisible = false;

  close() {
    this.setFormVisible.emit(false)
  }
}
