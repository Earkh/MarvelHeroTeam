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

  constructor(
    private menuCtrl: MenuController,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.menuCtrl.enable(false);
    this.loginForm = this.fb.group({
      email: ['user1@tmail.com', Validators.required],
      password: ['123456', Validators.required],
    })
  }

  ngOnInit() {

  }

  login() {
    let isUser = this.authService.login(this.loginForm.value);
    if (isUser) {
      this.router.navigate(['/hero'])
    }
  }


}
