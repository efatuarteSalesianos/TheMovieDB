import { Genre } from './../model/interfaces/genres.interface';
import { MovieService } from '../services/movie.service';
import { Movie } from '../model/interfaces/movies-popular.interface';
import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {

  moviesPopularList: Movie[] | undefined;

  genre= '';

  moviesGenre: Movie[] | undefined;

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.getMoviesPopularList();
  }

  getMoviesPopularList() {
    this.MovieService.getPopularMovies().subscribe(resultado => {
      this.moviesPopularList = resultado.results;
    })
  }

  getMoviesByGenre(genre: Genre): Movie[] {
    this.moviesGenre = this.moviesPopularList?.filter( movie => movie.genre_ids.includes(genre.id));
    if(this.moviesGenre)
      return this.moviesGenre;
    else
      return [];
  }

}
