import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IHeritageGroupSaveRequest } from '../../interfaces/iheritage-group-save-request';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';
import { HeritageGroupService } from '../../services/heritage-group.service';
import { IMxmBaseRequest } from 'src/app/shared/interfaces/imxm-base-request.interface';
import { IAuthenticationToken } from 'src/app/shared/interfaces/iauthentication-token.interface';
import { AuthenticationDataService } from 'src/app/template/sidebar/components/services/authentication-form.service';
import { getMxmRequest, invalidAuthDataObjMsg } from 'src/app/shared/helpers';
import { MessageService } from 'primeng/api';
import { htmlElementValidatable } from 'src/app/shared/mixims/html-element-validatable.mixim';
import { IHeritageGroupGetResponse } from '../../interfaces/iheritage-group-get-response';

interface Status {
  name: string;
  value: string;
}

const HeritageGroupFormComponentBase = subscriptable(htmlElementValidatable(class { }));

@Component({
  selector: 'app-heritage-group-form',
  templateUrl: './heritage-group-form.component.html',
  styleUrls: ['./heritage-group-form.component.scss']
})
export class HeritageGroupFormComponent
  extends HeritageGroupFormComponentBase implements OnChanges {

  @Input() data?: IHeritageGroupGetResponse;
  @Input() showForm?: boolean = true;
  @Output() closeForm = new EventEmitter<boolean>(false);

  form: FormGroup = this.formBuilder.group({
    codigoGrupoPatrimonial: [null, [Validators.required, Validators.maxLength(6)]],
    descricaoGrupoPatrimonial: [null, [Validators.required, Validators.maxLength(30)]],
    taxa: [null, Validators.required],
    percentualDepreciacao01: [null, Validators.maxLength(6)],
    percentualDepreciacao02: [null, Validators.maxLength(6)],
    pPercentualDepreciacaoFiscal: [null, Validators.maxLength(6)],
    percentualMaximoDepreciacaoResidual: [null, Validators.maxLength(6)],
    proporcional: [null, Validators.maxLength(1)],
    taxaDepreciacaoVariavel: [null, Validators.maxLength(19)],
    inativo: [null, Validators.maxLength(1)],
    codigoResponsavel: [null, Validators.maxLength(30)]
  });

  yesNoOptions: object[] = [
    { name: 'Sim', value: 'S' },
    { name: 'Não', value: 'N' },
  ]
  statusOptions: Status[] = [
    { name: 'Inativo', value: 'S' },
    { name: 'Ativo', value: 'N' },
  ]
  taxOptions: object[] = [
    { name: 'Fixa', value: 'F' },
    { name: 'Variável', value: 'V' },
  ]

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authDataService: AuthenticationDataService,
    private readonly heritageGroupService: HeritageGroupService,
    private readonly messageService: MessageService
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data)
      this.setForm();
    else
      this.form.reset();
  }

  save() {
    if (this.form!.invalid) return;

    const dropdownFields =  ["taxa", "inativo", "proporcional"];
    dropdownFields.forEach(f => {
      if (!this.form.get(f)!.value)
        this.form.patchValue({ [f]: { name: '', value: '' }});
    })

    const authData = this.authDataService.getAuthData();
    if (!authData) {
      this.messageService.add(invalidAuthDataObjMsg);
      return;
    }

    const subscription = this.heritageGroupService
      .save(this.getRequestData(authData))
      .subscribe(() => this.heritageGroupService.notify());
    this.addSubscription(subscription);

    this.closeForm.emit();
  }

  getRequestData(authData: IAuthenticationToken)
    : IMxmBaseRequest<IHeritageGroupSaveRequest> {

    const data = {
      InterfaceArquivoGrupoPatrimonial: [
        {
          CodigoGrupoPatrimonial: this.form.get("codigoGrupoPatrimonial")!.value,
          DescricaoGrupoPatrimonial: this.form.get("descricaoGrupoPatrimonial")!.value,
          Taxa: this.form.get("taxa")!.value.value,
          PercentualDepreciacao01: this.form.get("percentualDepreciacao01")!.value,
          PercentualDepreciacao02: this.form.get("percentualDepreciacao02")!.value,
          PercentualDepreciacaoFiscal: this.form.get("pPercentualDepreciacaoFiscal")!.value,
          PercentualMaximoDepreciacaoResidual: this.form.get("percentualMaximoDepreciacaoResidual")!.value,
          Proporcional: this.form.get("proporcional")!.value.value,
          TaxaDepreciacaoVariavel: this.form.get("taxaDepreciacaoVariavel")!.value,
          Inativo: this.form.get("inativo")!.value.value,
          CodigoResponsavel: this.form.get("codigoResponsavel")!.value
        }
      ]
    }

    return getMxmRequest(authData, data);
  }

  setForm(): void {
    this.form.patchValue({
      codigoGrupoPatrimonial: this.data!.Codigo,
      descricaoGrupoPatrimonial: this.data!.Descricao,
      codigoResponsavel: this.data!.CodigoUsuarioResponsavelInativacao,
      inativo: this.statusOptions.find(s => s.value === this.data!.Inativo),
    });
  }

  closeModal(): void {
    this.closeForm.emit(false);
    this.form.reset();
  }

  getViewTitle(): string {
    return !this.data ?
      "Cadastro de Grupo Patrimonial" :
      "Alteração de Grupo Patrimonial";
  }
}
