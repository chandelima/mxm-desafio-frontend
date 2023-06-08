import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = this.formBuilder.group({
    username: [null, [Validators.min(3), Validators.required]],
		password: [null, [Validators.min(3), Validators.required]],
		enviroment: ["", [Validators.min(1), Validators.required]]
	});

  constructor(private readonly formBuilder: FormBuilder) {
  }

  onLogin() {
    console.log("cliquei no login!");
  }

  verifyValidTouched(control: string): boolean {
		return (
			!this.form!.get(control)!.value &&
			this.form!.get(control)!.touched
		);
	}

	applyControlInvalid(control: string): object {
		return {
			'ng-invalid': this.verifyValidTouched(control),
			'ng-dirty': this.verifyValidTouched(control),
		};
	}
}
