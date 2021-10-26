import { MovieService } from '../services/movie.service';
import { MoviesPopular } from '../model/interfaces/movies-popular.interface';
import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {

  moviesPopularList: MoviesPopular[] | undefined;

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.getMoviesPopularList();
  }

  getMoviesPopularList() {
    this.MovieService.getPopularMovies().subscribe(resultado => {
      this.moviesPopularList = resultado.results;
    })
  }

}
