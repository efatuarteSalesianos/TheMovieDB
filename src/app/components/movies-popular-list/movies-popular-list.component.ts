import { AuthService } from './../../services/auth.service';
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

  moviesPopularList: Movie[] = [];

  genreList: Genre[] = [];
  moviesGenre: Movie[] = [];
  genreSelected!: number;

  constructor(private movieService: MovieService, private genreService: GenreService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getMoviesPopularList();
    this.getGenresList();
  }

  getMoviesPopularList() {
    this.movieService.getPopularMovies().subscribe(resultado => {
      this.moviesPopularList = resultado.results;
      this.moviesGenre = this.moviesPopularList;
    })
  }

  getGenresList() {
    this.genreService.getGenres().subscribe(resultado => {
      this.genreList = resultado.genres;
    })
  }

/*   getMoviesByGenre() {
    if(this.genreSelected)
      this.MovieService.getMoviesByGenre(this.genreSelected.id).subscribe(resultado => {
        this.moviesGenre = resultado.results;
      })
  } */

  getMoviesByGenre2() {
    if(this.genreSelected && this.genreSelected != 0) {
      this.moviesGenre = this.moviesPopularList?.filter(movie => movie.genre_ids.includes(this.genreSelected));
    } else if(this.genreSelected == 0) {
      this.moviesGenre = this.moviesPopularList;
    }
  }

  getGenreSelectedName() {
    return this.genreList.find(x => x.id == this.genreSelected)?.name;
  }
}
