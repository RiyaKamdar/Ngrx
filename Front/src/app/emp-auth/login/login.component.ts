import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm : FormGroup;
  userValue: any;
  invalid = false;

  constructor(private auth: AuthenticationService, private router: Router) { 
    localStorage.clear()
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]),
        password : new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
  }

  get email() { 
    return this.loginForm.get('email'); 
  }

  get passw() { 
    return this.loginForm.get('password'); 
  }

  onLogin(){

    this.userValue = {email: this.loginForm.value.email, password: this.loginForm.value.password}
    // console.log(this.userValue)

    this.auth.loginUser(this.userValue).subscribe(
      res => {
        this.invalid = false;
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/emplist'])
      },
      err => {
        this.invalid = true;
        console.log(err)
      }
    )
  }
}
