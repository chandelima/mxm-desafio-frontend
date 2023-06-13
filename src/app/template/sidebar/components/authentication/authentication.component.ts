import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { htmlElementValidatable } from 'src/app/shared/mixims/html-element-validatable.mixim';
import { AuthenticationRequest } from './interfaces/authentication-request';

const AuthenticationComponentBase = htmlElementValidatable(class {});

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent extends AuthenticationComponentBase {

  authenticationData?: AuthenticationRequest;
  form: FormGroup = this.formBuilder.group({
		username: [null, Validators.required],
		password: [null, Validators.required],
		environment: [null, Validators.required]
	});

  constructor(
    private readonly formBuilder: FormBuilder
  ) { super(); }

  getAuthenticationData(): AuthenticationRequest | null {
    let data = null;

    if (this.form.valid) data = {
        Username: this.form.get("username")!.value,
        Password: this.form.get("password")!.value,
        EnvironmentName: this.form.get("environment")!.value,
    };

    return data;
  }
}
