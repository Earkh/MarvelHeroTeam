import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import {AlertService} from "../../shared/services/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private alertCtrl: AlertService
  ) {
    this.menuCtrl.enable(false, 'user-menu');
    this.loginForm = this.fb.group({
      email: ['pepelopez@email.com', Validators.required],
      password: ['123456', Validators.required],
    })
  }

  login() {
    if (this.authService.simulatedLogin(this.loginForm.value)) {
      this.router.navigate(['/hero'])
      this.menuCtrl.enable(true, 'user-menu');
    } else {
      this.errorMessage = 'Email/Contraseña inválido';
    }
  }

  rememberUser() {
    this.alertCtrl.presentSimpleAlert({subheader: 'pepelopez@email.com', message: '123456'})
  }


}
