import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/model/interfaces/movies-popular.interface';
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
    console.log("DATA: " + this.data.movieId);
    console.log("MOVIE: " + this.movie);

    this.movieService.getMovie(this.data.movieId).subscribe(movieResult => {
      this.movie = movieResult;
      console.log("MOVIE: " + this.movie);
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

  convertDate(date: Date): string {
    return this.movie.release_date.toLocaleString();
  }

}
