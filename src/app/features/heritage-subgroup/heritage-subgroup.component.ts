import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HeritageSubgroupService } from './services/heritage-subgroup.service';
import { IHeritageSubgroupResponse } from './interfaces/iheritage-subgroup-response';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';
import { IHeritageSubgroupRequest } from './interfaces/iheritage-subgroup-request';
import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';

const EquitySubGroupComponentBase = subscriptable(class {});

@Component({
  selector: 'app-heritage-subgroup',
  templateUrl: './heritage-subgroup.component.html',
  styleUrls: ['./heritage-subgroup.component.scss']
})
export class EquitySubGroupComponent
  extends EquitySubGroupComponentBase implements OnInit {

  dataList: IHeritageSubgroupResponse[] = [];

  formVisible = false;
  modalStatusVisible = false;

  form: FormGroup = this.formBuilder.group({
    codigo: null,
		descricao: null,
		codigoGrupoPatrimonial: null
	});

  constructor(
    private readonly service: HeritageSubgroupService,
    private readonly formBuilder: FormBuilder
  ) { super(); }

  ngOnInit(): void {
    const subscription = this.service.notifyier
      .subscribe(_ => this.get());
    this.addSubscription(subscription);
  }

  get() {
    const request: IMxmBaseRequest<IHeritageSubgroupRequest> = {
      AutheticationToken: {
        Username: "",
        Password: "",
        EnvironmentName: ""
      },
      Data: {
        Codigo: this.form.get("codigo")?.value,
        Descricao: this.form.get("descricao")?.value,
        CodigoGrupoPatrimonial: this.form.get("codigoGrupoPatrimonial")?.value,
      }
    }

    const subscription = this.service.read(request)
      .subscribe({
        next: res => {
          if (!res.Data) return;

          this.dataList = res.Data.sort(
            (a, b) => a.Descricao > b.Descricao ? 1 : -1
          )}
      });
    this.addSubscription(subscription);
  }

  setFormVisible(state: boolean) {
    this.formVisible = state;
  }
}
