import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.authService.getRequestToken().subscribe(resp => {
      this.authService.setLocalRequestToken(resp.request_token);
      window.open(`https://www.themoviedb.org/authenticate/${resp.request_token}?redirect_to=http://localhost:4200/loginsuccess`,"_self");

    });
  }

}
