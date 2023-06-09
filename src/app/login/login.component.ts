import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { htmlElementValidatable } from '../shared/mixims/html-element-validatable.mixim';


const LoginComponentBase = htmlElementValidatable(class {});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends LoginComponentBase {

  form: FormGroup = this.formBuilder.group({
    username: [null, [Validators.min(3), Validators.required]],
		password: [null, [Validators.min(3), Validators.required]],
		enviroment: ["", [Validators.min(1), Validators.required]]
	});

  constructor(private readonly formBuilder: FormBuilder) {
    super();
  }

  onLogin() {
    console.log("cliquei no login!");
  }
}
