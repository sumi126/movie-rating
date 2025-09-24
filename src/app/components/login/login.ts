import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {}
  login() {
    if (this.username.trim().length == 0) {
      this.errorMsg = 'Username is required';
    } else if (this.password.trim().length == 0) {
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      this.auth
        .login(this.username, this.password)
        .subscribe((res: boolean) => {
          if (res) {
            this.router.navigate(['home']);
          } else {
            this.errorMsg = 'Invalid Credentials! Please try again.';
          }
        });
    }
  }
}
