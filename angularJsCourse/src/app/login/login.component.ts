import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  // How to redirct afer a successful login
  // First thing we import the Router
  constructor(private route: Router, private loginService: LoginService) {}

  login() {
    // if(this.email === 'admin@example.com' && this.password === 'Admin'){
    //   // alert('Login Successful')
    //   // So there are many methods of doing this
    //   // this.route.navigate(['/rooms', 'add']);
    //   this.route.navigateByUrl('/rooms/add');
    // }

    // Using Router Guide Implematation
    if(this.loginService.login(this.email, this.password)){
      this.route.navigate(['/rooms']);
    }
  }
}
