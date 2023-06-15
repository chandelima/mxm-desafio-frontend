import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMxmBaseResponse } from 'src/app/shared/interfaces/imxm-base-response.interface';
import { IHeritageSubgroupResponse } from '../interfaces/iheritage-subgroup-response';
import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';
import { IHeritageSubgroupRequest } from '../interfaces/iheritage-subgroup-request';

@Injectable({
  providedIn: 'root'
})
export class HeritageSubgroupService {

  readonly notifyier = new BehaviorSubject<boolean>(true);

  private readonly baseUrl = environment.apiURL;
  private readonly resourcePaths = {
    read: "api/InterfacedoSubGrupoPatrimonial/ConsultaSubGrupoPatrimonial"
  }

  constructor(
    private readonly http: HttpClient
  ) {}

    read(data: IMxmBaseRequest<IHeritageSubgroupRequest>)
      : Observable<IMxmBaseResponse<IHeritageSubgroupResponse[]>> {

      const url = `${this.baseUrl}/GET/?resourcePath=${this.resourcePaths.read}`;

      return this.http.post<IMxmBaseResponse<IHeritageSubgroupResponse[]>>(
        url, data);
    }
}
