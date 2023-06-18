import { Injectable, Injector } from '@angular/core';

import { HttpBaseService } from 'src/app/shared/services/http-base-service';

@Injectable({
  providedIn: 'root'
})
export class HeritageGroupService extends HttpBaseService {

  protected readonly resourcePaths = {
    get: "/GET/?resourcePath=api/InterfacedoGrupoPatrimonial/ConsultaporGrupoPatrimonial",
    save: "/POST/?resourcePath=api/InterfacedoGrupoPatrimonial/Gravar",
  }

  constructor(protected override readonly injector: Injector)
  { super(injector) }
}
