import { environment } from './../../environments/environment';
import { MoviesPopular } from '../model/interfaces/movies-popular.interface';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movieInput: MoviesPopular | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getPhotoUrl(url: string | undefined): string {
    if(url) {
      let photo = this.movieInput?.poster_path;
      return `${environment.img_base_url}${photo}`;
    } else {
      return '';
    }
  }
}
