import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { htmlElementValidatable } from 'src/app/shared/mixims/html-element-validatable.mixim';
import { subscriptable } from 'src/app/shared/mixims/subscriptable.mixim';
import { AuthenticationDataService } from '../services/authentication-form.service';
import { IAuthenticationToken } from 'src/app/shared/interfaces/iauthentication-token.interface';


const AuthenticationFormComponentBase = htmlElementValidatable(subscriptable(class {}));

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.scss']
})
export class AuthenticationFormComponent
  extends AuthenticationFormComponentBase {

  form: FormGroup = this.formBuilder.group({
    username: null,
		password: null,
		environment: null
	});

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authDataService: AuthenticationDataService,
  ) { super(); }

  setAuthData() {
    let authData: IAuthenticationToken | null = null;

    if (this.form.valid) authData = {
      Username: this.form.get("username")!.value,
      Password: this.form.get("password")!.value,
      EnvironmentName: this.form.get("environment")!.value
    }

    this.authDataService.setAuthData(authData);
  }
}
