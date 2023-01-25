import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MenuController } from "@ionic/angular";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private menuCtrl: MenuController,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['pepelopez@email.com', Validators.required],
      password: ['123456', Validators.required],
    })
  }

  ngOnInit() {

  }

  login() {
    this.authService.simulatedLogin(this.loginForm.value)
      ? this.router.navigate(['/hero'])
      : this.errorMessage = 'Email/Contraseña inválido';
  }


}
