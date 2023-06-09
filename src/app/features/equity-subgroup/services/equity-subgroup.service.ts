import { Injectable, Injector } from '@angular/core';

import { EquitySubgroupResponse } from '../interfaces/equity-subgroup-response';
import { EquitySubgroupRequest } from '../interfaces/equity-subgroup-request';
import { CrudBaseService } from 'src/app/shared/services/crud-base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquitySubgroupService extends CrudBaseService<EquitySubgroupRequest, EquitySubgroupResponse> {

  override baseUrl = `${environment.apiURL}/equity-subgroup`;

  constructor(protected override readonly injector: Injector) {
    super(injector)
  }
}
