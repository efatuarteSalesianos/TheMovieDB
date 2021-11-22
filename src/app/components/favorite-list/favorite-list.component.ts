import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { MovieItem } from 'src/app/model/interfaces/favorite-list.interface';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  favoriteMovies: MovieItem[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getFavoriteMovies().subscribe(result => {
      this.favoriteMovies = result.results;
    });
  }

}
