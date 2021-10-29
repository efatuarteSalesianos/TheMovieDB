import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment.prod';
import { MovieService } from '../../../services/movie.service';
import { MovieResponse } from '../../../model/interfaces/movie.interface';

export interface MovieDetailDialogData {
  movieId: number;
}

@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.css']
})

export class MovieDetailDialogComponent implements OnInit {

  movie!: MovieResponse;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: MovieDetailDialogData,
    private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovie(this.data.movieId).subscribe(movieResult => {
      this.movie = movieResult;
    });
  }

  getPhotoUrl(): string {
    if(this.movie) {
      let photo = this.movie.poster_path;
      return `${environment.img_base_url}${photo}`;
    } else {
      return '';
    }
  }

}
