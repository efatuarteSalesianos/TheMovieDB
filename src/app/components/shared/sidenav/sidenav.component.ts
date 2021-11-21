import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { LoginDialogComponent } from '../../dialogs/login-dialog/login-dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  currentPage = 'movies-popular';

  constructor(private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  isLogged(): boolean {
    return this.authService.isLogged();
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '500px',
      disableClose: true
    });
  }
}
