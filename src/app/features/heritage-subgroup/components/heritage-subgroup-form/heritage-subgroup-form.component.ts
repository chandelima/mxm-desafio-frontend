import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HeritageSubgroupService } from '../../services/heritage-subgroup.service';
import { IHeritageSubgroupRequest } from '../../interfaces/iheritage-subgroup-request';
import { IHeritageSubgroupResponse } from '../../interfaces/iheritage-subgroup-response';
import { htmlElementValidatable } from 'src/app/shared/mixims/html-element-validatable.mixim';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';

const HeritageSubgroupFormComponentBase = htmlElementValidatable(subscriptable(class {}));

@Component({
  selector: 'app-heritage-subgroup-form',
  templateUrl: './heritage-subgroup-form.component.html',
  styleUrls: ['./heritage-subgroup-form.component.scss']
})
export class HeritageSubgroupFormComponent extends HeritageSubgroupFormComponentBase {

  @Input() data?: IHeritageSubgroupResponse;
  @Output() setFormVisible = new EventEmitter<boolean>();
  @Input() formVisible = false;
  form: FormGroup = this.formBuilder.group({
    id: null,
		Descricao: [null, Validators.required],
		CodigoGrupoPatrimonial: [null, Validators.required]
	});

  constructor(
    private formBuilder: FormBuilder,
    private service: HeritageSubgroupService
  ) { super(); }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]?.currentValue === undefined) return;
    this.form.patchValue({ ...changes["data"].currentValue  });
  }

  ngOnDestroy(): void {
    this.cleanSubscriptions();
  }

  setDataToSave(): IHeritageSubgroupRequest {
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

  create(data: IHeritageSubgroupRequest): void {
    // const subscription = this.service.create(data)
    //   .subscribe(_ => this.service.notify());
    // this.addSubscription(subscription);
  }

  edit(id: string, product: IHeritageSubgroupRequest): void {
    // const subscription = this.service.update(id, product)
    //   .subscribe(_ => this.service.notify());
    // this.addSubscription(subscription);
  }

  cancel(): void {
    this.setFormVisible.emit(false);
    this.form.reset();
  }
}
