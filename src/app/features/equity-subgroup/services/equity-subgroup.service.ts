import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Axios from  'axios-observable';
import { EquitySubgroupRequestInterface } from '../interfaces/equity-subgroup-request';
import { environment } from 'src/environments/environment';
import { MxmRequestInterface } from 'src/app/shared/interfaces/mxm-payload.interface';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EquitySubgroupService {

  readonly notifyier = new BehaviorSubject<boolean>(true);

  private readonly baseUrl = `/proxy/api/InterfacedoSubGrupoPatrimonial/ConsultaSubGrupoPatrimonial`;

  constructor(private readonly http: HttpClient) { }

  private readonly headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  get(payload: MxmRequestInterface<EquitySubgroupRequestInterface>) {
    console.log(payload);
    const requestData = {
      method: "GET",
      url: this.baseUrl,
      body: payload,
      headers: this.headers,
    }

    return this.http.request("GET", this.baseUrl, { body: payload});
  }
}
