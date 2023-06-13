import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EquitySubgroupService } from '../../services/equity-subgroup.service';
import { EquitySubgroupRequestInterface } from '../../interfaces/equity-subgroup-request';
import { EquitySubgroupResponseInterface } from '../../interfaces/equity-subgroup-response';
import { htmlElementValidatable } from 'src/app/shared/mixims/html-element-validatable.mixim';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';
import { Router } from '@angular/router';

const EquitySubgroupFormComponentBase = htmlElementValidatable(subscriptable(class {}));

@Component({
  selector: 'app-equity-subgroup-form',
  templateUrl: './equity-subgroup-form.component.html',
  styleUrls: ['./equity-subgroup-form.component.scss']
})
export class EquitySubgroupFormComponent extends EquitySubgroupFormComponentBase {

  @Input() data?: EquitySubgroupResponseInterface;
  @Output() setFormVisible = new EventEmitter<boolean>();
  @Input() formVisible = false;
  form: FormGroup = this.formBuilder.group({
    id: null,
		Descricao: [null, Validators.required],
		CodigoGrupoPatrimonial: [null, Validators.required]
	});

  constructor(
    private formBuilder: FormBuilder,
    private service: EquitySubgroupService,
    private router: Router
  ) { super(); }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"]?.currentValue === undefined) return;
    this.form.patchValue({ ...changes["data"].currentValue  });
  }

  ngOnDestroy(): void {
    this.cleanSubscriptions();
  }

  setDataToSave(): EquitySubgroupRequestInterface {
    return {
      Codigo: this.form.get("Descricao")!.value,
      Descricao: this.form.get("Descricao")!.value,
      CodigoGrupoPatrimonial: this.form.get("CodigoGrupoPatrimonial")!.value
    };
  }

  close(): void {
    this.setFormVisible.emit(false);
    this.form.reset();
    this.router.navigate(['app/equity-subgroup']);
  }
}
