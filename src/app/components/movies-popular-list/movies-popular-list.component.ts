import { Genre } from '../../model/interfaces/genres.interface';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../model/interfaces/movies-popular.interface';
import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {

  moviesPopularList: Movie[] | undefined;

  genreList: Genre[] | undefined;
  moviesGenre: Movie[] | undefined;
  genreSelected: Genre | undefined;

  constructor(private MovieService: MovieService, private GenreService: GenreService) { }

  ngOnInit(): void {
    this.getMoviesPopularList();
    this.getGenresList();
    this.getMoviesByGenre();
  }

  getMoviesPopularList() {
    this.MovieService.getPopularMovies().subscribe(resultado => {
      this.moviesPopularList = resultado.results;
    })
  }

  getGenresList() {
    this.GenreService.getGenres().subscribe(resultado => {
      this.genreList = resultado.genres;
    })
  }

  getMoviesByGenre() {
    if(this.genreSelected) {
      let id2 = this.genreSelected?.id;
      let id = 27;
      this.MovieService.getMoviesByGenre(id).subscribe(resultado => {
        this.moviesGenre = resultado.results;
      })
    }
  }
}
