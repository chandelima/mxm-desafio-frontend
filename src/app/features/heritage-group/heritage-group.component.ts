import { Component, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MainBaseComponent } from 'src/app/shared/components/crud/main-base.component';
import { IHeritageGroupGetRequest } from './interfaces/iheritage-group-get-request';
import { IHeritageGroupGetResponse } from './interfaces/iheritage-group-get-response';
import { HeritageGroupService } from './services/heritage-group.service';
import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';
import { IAuthenticationToken } from 'src/app/shared/interfaces/iauthentication-token.interface';
import { ISelectOptions } from 'src/app/shared/interfaces/iselect-option.interface';

@Component({
  selector: 'app-heritage-group',
  templateUrl: './heritage-group.component.html',
  styleUrls: ['./heritage-group.component.scss']
})
export class HeritageGroupComponent
  extends MainBaseComponent<IHeritageGroupGetRequest, IHeritageGroupGetResponse> {

  formVisible: boolean = false;

  override filterForm: FormGroup = this.formBuilder.group({
    codigo: "",
    descricao: "",
    inativo: ""
  });

  statusOptions: ISelectOptions[] = [
    { name: 'Inativo', value: 'S' },
    { name: 'Ativo', value: 'N' },
  ]

  constructor(
    protected override readonly injector: Injector,
    protected readonly dataService: HeritageGroupService
  ) {
    super(injector);
  }

  override getRequestData(authData: IAuthenticationToken)
    : IMxmBaseRequest<IHeritageGroupGetRequest> {

      if (!this.filterForm.get("inativo")!.value)
      this.filterForm.patchValue({ ["inativo"]: { name: '', value: '' } });

    return {
      AutheticationToken: { ...authData! },
      Data: {
        Codigo: this.filterForm.get("codigo")?.value,
        Descricao: this.filterForm.get("descricao")?.value,
        Inativo: this.filterForm.get("inativo")?.value.value,
      }
    }
  }

  setEmptyStatusValue() {
    if (!this.filterForm.get("inativo")?.value)
      this.filterForm.patchValue({ inativo: { name: '', value: '' } });
  }

  setFormVisible(state: boolean, data: IHeritageGroupGetResponse | null = null)
    : void {

    this.formVisible = state;
    if (!state) this.data = undefined;
    if (data) this.data = data;
  }
}
