import { AccountStateResponse } from './../../model/interfaces/account-state.interface';
import { Router } from '@angular/router';
import { LoginDialogComponent } from './../dialogs/login-dialog/login-dialog.component';
import { AddToListDialogComponent } from './../dialogs/add-to-list-dialog/add-to-list-dialog.component';
import { environment } from './../../../environments/environment';
import { Movie } from '../../model/interfaces/movies-popular.interface';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailDialogComponent } from '../dialogs/movie-detail-dialog/movie-detail-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';
import { AddToFavoriteDTO } from '../../model/dto/addToFavorite.dto';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  favouriteDTO = new AddToFavoriteDTO();

  isFav: boolean = false;

  @Input() movieInput!: Movie;

  constructor(private movieService: MovieService, private authService: AuthService, private dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {
    this.isFavorite();
  }

  getPhotoUrl(): string {
    if(this.movieInput) {
      let photo = this.movieInput?.poster_path;
      return `${environment.img_base_url}${photo}`;
    } else {
      return '';
    }
  }

  openDialogMovieDetail(id: number | undefined) {
    this.dialog.open(MovieDetailDialogComponent, {
      width: '500px',
      disableClose: true,
      data: { movieId: id }
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '500px',
      disableClose: true
    });
  }

  addToPlayList() {
    if(this.authService.isLogged()) {
      this.addToPlaylistDialog(this.movieInput.id);
    } else {
      this.openLoginDialog();
    }
  }

  addToPlaylistDialog(id: number | undefined) {
    this.dialog.open(AddToListDialogComponent, {
      width: '500px',
      height: '550px',
      data: { movieId: id }
    });
  }

  isFavorite() {
    this.movieService.getAccountStates(this.movieInput.id).subscribe(result => {
      this.isFav = result.favorite;
    });
  }

  markFavorite() {
    if(this.authService.isLogged()) {
      this.favouriteDTO.media_id = this.movieInput.id;
      this.favouriteDTO.favorite = !this.isFav;
      this.movieService.addMovieToFavourite(this.favouriteDTO);
      this.route.navigate(['/favorites']);
    } else {
      this.openLoginDialog();
    }
  }

}
