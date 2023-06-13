import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { htmlElementValidatable } from 'src/app/shared/mixims/html-element-validatable.mixim';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';

const EquitySubgroupStatusComponentBase = htmlElementValidatable(subscriptable(class {}));

@Component({
  selector: 'app-equity-subgroup-status',
  templateUrl: './equity-subgroup-status.component.html',
  styleUrls: ['./equity-subgroup-status.component.scss']
})
export class EquitySubgroupStatusComponent extends EquitySubgroupStatusComponentBase implements OnInit {

  @Input() modalVisible = false;
  @Input() code?: string;
  @Output() setModalVisible = new EventEmitter<boolean>();
  status?: string;
  form: FormGroup = this.formBuilder.group({
		code: [null, Validators.required]
	});

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.setCode(params.get('code')!);
      console.log(this.code);
    });
  }

  close(): void {
    this.setModalVisible.emit(false);
    this.code = undefined;
    this.router.navigate(["/app/equity-subgroup"]);
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

  setCode(code: string): void {
    this.code = code;
    this.form.patchValue({ code });
  }
}
