import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor() { }

  login(email: string, password: string) {
    if(email === 'admin@example.com' && password === 'Admin'){
      // alert('Login Successful')
      // So there are many methods of doing this
      // this.route.navigate(['/rooms', 'add']);
      // this.route.navigateByUrl('/rooms/add');
      this.isLoggedIn = true;
      this.isAdmin = true;
    }

    // For canActivateChild
    if(email === 'user@example.com' && password === 'User'){
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
    // return this.isAdmin;
  }
}
