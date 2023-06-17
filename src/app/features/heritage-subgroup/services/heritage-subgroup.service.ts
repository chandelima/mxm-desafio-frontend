import { Injectable, Injector } from '@angular/core';

import { HttpBaseService } from 'src/app/shared/services/http-base-service';

@Injectable({
  providedIn: 'root'
})
export class HeritageSubgroupService extends HttpBaseService {

  protected readonly resourcePaths = {
    get: "/GET/?resourcePath=api/InterfacedoSubGrupoPatrimonial/ConsultaSubGrupoPatrimonial"
  }

  constructor(protected override readonly injector: Injector)
  { super(injector) }
}
