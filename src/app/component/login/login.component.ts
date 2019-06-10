import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../service/login/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authSer: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginInit();
  }

  private loginInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  private onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.authSer.login(username, password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
