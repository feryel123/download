import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {   }

  ngOnInit() {
  }
  handleLogin() {
    
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      console.log('success');
      
      this.router.navigate(['wlc-page']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
      console.log('error')
    });      
  }
}
