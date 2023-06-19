import { Component, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { HeritageSubgroupService } from './services/heritage-subgroup.service';
import { IHeritageSubgroupResponse } from './interfaces/iheritage-subgroup-response';
import { IHeritageSubgroupRequest } from './interfaces/iheritage-subgroup-request';
import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';
import { MainBaseComponent } from 'src/app/shared/components/crud/main-base.component';
import { IAuthenticationToken } from 'src/app/shared/interfaces/iauthentication-token.interface';


@Component({
  selector: 'app-heritage-subgroup',
  templateUrl: './heritage-subgroup.component.html',
  styleUrls: ['./heritage-subgroup.component.scss'],
})
export class HeritageSubgroupComponent
  extends MainBaseComponent<IHeritageSubgroupRequest, IHeritageSubgroupResponse> {

  override filterForm: FormGroup = this.formBuilder.group({
    codigo: "",
		descricao: "",
		codigoGrupoPatrimonial: ""
	});

  constructor(
    protected override readonly injector: Injector,
    protected readonly dataService: HeritageSubgroupService
  ) {
    super(injector);
  }

  override getRequestData(authData: IAuthenticationToken)
  : IMxmBaseRequest<IHeritageSubgroupRequest> {

    return {
      AutheticationToken: { ...authData! },
      Data: {
        Codigo: this.filterForm.get("codigo")?.value,
        Descricao: this.filterForm.get("descricao")?.value,
        CodigoGrupoPatrimonial: this.filterForm.get("codigoGrupoPatrimonial")?.value,
      }
    }
  }
}
