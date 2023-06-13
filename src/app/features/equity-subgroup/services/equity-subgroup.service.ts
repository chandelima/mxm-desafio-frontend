import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { EquitySubgroupRequestInterface } from '../interfaces/equity-subgroup-request';
import { environment } from 'src/environments/environment';
import { MxmRequestInterface } from 'src/app/shared/interfaces/mxm-payload.interface';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EquitySubgroupService {

  readonly notifyier = new BehaviorSubject<boolean>(true);

  private readonly baseUrl = `${environment.apiURL}/api/InterfacedoSubGrupoPatrimonial/ConsultaSubGrupoPatrimonial`;

  constructor(private readonly http: HttpClient) { }

  get(payload: MxmRequestInterface<EquitySubgroupRequestInterface>) {
    const requestData = new HttpRequest("GET", this.baseUrl, payload);

    return this.http.request(requestData);
  }
}
