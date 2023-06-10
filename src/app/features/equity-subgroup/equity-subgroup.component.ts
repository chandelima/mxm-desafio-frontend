import { Component, OnDestroy, OnInit } from '@angular/core';

import { EquitySubgroupService } from './services/equity-subgroup.service';
import { EquitySubgroupResponse } from './interfaces/equity-subgroup-response';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';

const EquitySubGroupComponentBase = subscriptable(class {});

@Component({
  selector: 'app-equity-subgroup',
  templateUrl: './equity-subgroup.component.html',
  styleUrls: ['./equity-subgroup.component.scss']
})
export class EquitySubGroupComponent extends EquitySubGroupComponentBase implements OnInit {

  dataList: EquitySubgroupResponse[] = [];
  searchInput = "";
  formVisible = false;
  modalStatusVisible = true;

  constructor(
    private readonly service: EquitySubgroupService
  ) { super(); }

  ngOnInit(): void {
    const subscription = this.service.notifyier
      .subscribe(_ => this.getAllProducts());
    this.addSubscription(subscription);
  }

  getAllProducts() {
    const subscription = this.service.getAll()
      .subscribe(p => this.dataList = p);
    this.addSubscription(subscription);
  }

  setFormVisible(state: boolean) {
    this.formVisible = state;
  }
}
