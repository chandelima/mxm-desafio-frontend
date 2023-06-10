import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { htmlElementValidatable } from 'src/app/shared/mixims/html-element-validatable.mixim';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';

const EquitySubgroupStatusComponentBase = htmlElementValidatable(subscriptable(class {}));

@Component({
  selector: 'app-equity-subgroup-status',
  templateUrl: './equity-subgroup-status.component.html',
  styleUrls: ['./equity-subgroup-status.component.scss']
})
export class EquitySubgroupStatusComponent extends EquitySubgroupStatusComponentBase {

  @Input() modalVisible = false;
  @Output() setFormVisible = new EventEmitter<boolean>();
  status?: string;
  id?: string;
  form: FormGroup = this.formBuilder.group({
		codigo: [null, Validators.required]
	});

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  cancel(): void {
    this.setFormVisible.emit(false);
    this.id = undefined;
  }

  getStatus(): void {
    switch (this.status) {
      case undefined:
        this.status = "pending";
        break;

      case "pending":
        this.status = "complete";
        break;

      case "complete":
        this.status = undefined;
        break;
    }
  }
}
