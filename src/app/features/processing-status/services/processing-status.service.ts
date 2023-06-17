import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';
import { environment } from 'src/environments/environment';
import { IProcessingStatusRequest } from '../interfaces/iprocessing-status-request';
import { Observable } from 'rxjs';
import { IMxmBaseResponse } from 'src/app/shared/interfaces/imxm-base-response.interface';
import { IProcessingStatusResponse } from '../interfaces/iprocessing-status-response';

@Injectable({
  providedIn: 'root'
})
export class ProcessingStatusService {

  private readonly baseUrl = environment.apiURL;
  private readonly resourcePaths = {
    read: "api/InterfacedoGrupoPatrimonial/ConsultaporProcesso"
  }

  constructor(
    private readonly http: HttpClient
  ) { }

  get(data: IMxmBaseRequest<IProcessingStatusRequest>)
    : Observable<IMxmBaseResponse<IProcessingStatusResponse>> {

    const url = `${this.baseUrl}/POST/?resourcePath=${this.resourcePaths.read}`;

    return this.http.post<IMxmBaseResponse<IProcessingStatusResponse>>(
      url, data);
  }
}
