import { environment } from './../../../environments/environment';
import { Movie } from '../../model/interfaces/movies-popular.interface';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movieInput: Movie | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getPhotoUrl(): string {
    if(this.movieInput) {
      let photo = this.movieInput?.poster_path;
      return `${environment.img_base_url}${photo}`;
    } else {
      return '';
    }
  }
}
