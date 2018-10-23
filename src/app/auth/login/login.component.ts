import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { AppConstants } from '../../app.constants';

@Component({
  selector: 'abs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  model: any; // TODO: LoginModel
  fields: FormlyFieldConfig[];

  constructor(
    private router: Router,
    private authService: AuthService,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({});
    this.model = { username: '', password: '' };
    this.fields = [
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          label: 'Username',
          placeholder: 'Enter username',
          required: true
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Enter password',
          required: true
        }
      }
    ];
  }

  submit(model: any /*TODO: Login Model*/) {
    this.authService
      .login(model.username, model.password)
      .subscribe((response: any) => {
        this.sessionStorageService.set(
          AppConstants.SESSION_STORAGE_KEYS.token,
          response.token
        );
        this.sessionStorageService.set(
          AppConstants.SESSION_STORAGE_KEYS.userData,
          response.userData
        );
        this.sessionStorageService.set(
          AppConstants.SESSION_STORAGE_KEYS.menuData,
          response.menuData
        );

        this.router.navigate([AppConstants.APP_NAVIGATION_URLS.landing]);
      });
  }
}
