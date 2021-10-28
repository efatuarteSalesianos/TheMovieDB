import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/interfaces/movies-popular.interface';

@Component({
  selector: 'app-movie-detail-dialog',
  templateUrl: './movie-detail-dialog.component.html',
  styleUrls: ['./movie-detail-dialog.component.css']
})

export class MovieDetailDialogComponent implements OnInit {

  @Input() movieInput: Movie | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
