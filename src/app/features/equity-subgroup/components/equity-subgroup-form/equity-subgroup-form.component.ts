import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EquitySubgroupService } from '../../services/equity-subgroup.service';
import { EquitySubgroupRequest } from '../../interfaces/equity-subgroup-request';
import { EquitySubgroupResponse } from '../../interfaces/equity-subgroup-response';
import { htmlElementValidatable } from 'src/app/shared/mixims/html-element-validatable.mixim';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';

const EquitySubgroupFormComponentBase = htmlElementValidatable(subscriptable(class {}));

@Component({
  selector: 'app-equity-subgroup-form',
  templateUrl: './equity-subgroup-form.component.html',
  styleUrls: ['./equity-subgroup-form.component.scss']
})
export class EquitySubgroupFormComponent extends EquitySubgroupFormComponentBase {

  @Input() data?: EquitySubgroupResponse;
  @Output() setFormVisible = new EventEmitter<boolean>();
  @Input() formVisible = false;
  form: FormGroup = this.formBuilder.group({
    id: null,
		Descricao: [null, Validators.required],
		CodigoGrupoPatrimonial: [null, Validators.required]
	});

  constructor(
    private formBuilder: FormBuilder,
    private service: EquitySubgroupService
  ) { super(); }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]?.currentValue === undefined) return;
    this.form!.patchValue({ ...changes["data"].currentValue  });
  }

  ngOnDestroy(): void {
    this.cleanSubscriptions();
  }

  setDataToSave(): EquitySubgroupRequest {
    return {
      Descricao: this.form.get("Descricao")!.value,
      CodigoGrupoPatrimonial: this.form.get("CodigoGrupoPatrimonial")!.value
    };
  }

  save(): void {
    if (!this.data)
      this.create(this.setDataToSave());
    else
      this.edit(this.data.id, this.setDataToSave());

    this.setFormVisible.emit(false);
    this.form.reset();
  }

  create(data: EquitySubgroupRequest): void {
    const subscription = this.service.create(data)
      .subscribe(_ => this.service.notify());
    this.addSubscription(subscription);
  }

  edit(id: string, product: EquitySubgroupRequest): void {
    const subscription = this.service.update(id, product)
      .subscribe(_ => this.service.notify());
    this.addSubscription(subscription);
  }

  cancel(): void {
    this.setFormVisible.emit(false);
    this.form.reset();
  }
}
