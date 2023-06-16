import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HeritageSubgroupService } from './services/heritage-subgroup.service';
import { IHeritageSubgroupResponse } from './interfaces/iheritage-subgroup-response';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';
import { IHeritageSubgroupRequest } from './interfaces/iheritage-subgroup-request';
import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';
import { AuthenticationDataService } from 'src/app/template/sidebar/components/services/authentication-form.service';
import { MessageService } from 'primeng/api';

const HeritageSubgroupComponentBase = subscriptable(class {});

@Component({
  selector: 'app-heritage-subgroup',
  templateUrl: './heritage-subgroup.component.html',
  styleUrls: ['./heritage-subgroup.component.scss'],
})
export class HeritageSubgroupComponent
  extends HeritageSubgroupComponentBase implements OnInit {

  dataList: IHeritageSubgroupResponse[] = [];

  formVisible = false;
  modalStatusVisible = false;

  form: FormGroup = this.formBuilder.group({
    codigo: "",
		descricao: "",
		codigoGrupoPatrimonial: ""
	});

  constructor(
    private readonly authDataService: AuthenticationDataService,
    private readonly heritageSubgroupService: HeritageSubgroupService,
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService
  ) { super(); }

  ngOnInit(): void {
    const heritageListSubscription = this.heritageSubgroupService.notifyier
      .subscribe(_ => this.get(false));
    const authDataSubscription = this.authDataService.notifyier
      .subscribe(_ => this.get(false));
    this.addSubscriptions([authDataSubscription, heritageListSubscription]);
  }

  get(emmitToast = true) {
    const authData = this.authDataService.getAuthData();

    if (!authData && emmitToast) {
      this.messageService.add({
        severity: 'error',
        summary: 'Dados inválidos',
        detail: `Informe todos os dados necessários para autenticação na barra
                 lateral esquerda e tente novamente.`
      })
      return;
    }

    const request: IMxmBaseRequest<IHeritageSubgroupRequest> = {
      AutheticationToken: { ...authData! },
      Data: {
        Codigo: this.form.get("codigo")?.value,
        Descricao: this.form.get("descricao")?.value,
        CodigoGrupoPatrimonial: this.form.get("codigoGrupoPatrimonial")?.value,
      }
    }

    const subscription = this.heritageSubgroupService.read(request)
      .subscribe(res => this.dataList = res.Data);

    this.addSubscription(subscription);
  }

  setFormVisible(state: boolean) {
    this.formVisible = state;
  }
}
