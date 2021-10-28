import { environment } from './../../../environments/environment';
import { Movie } from '../../model/interfaces/movies-popular.interface';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailDialogComponent } from '../dialogs/movie-detail-dialog/movie-detail-dialog.component';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() movieInput: Movie | undefined;

  constructor(public dialog: MatDialog) { }

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

  openDialogMovieDetail(id: number | undefined) {
    const dialogRef = this.dialog.open(MovieDetailDialogComponent, {
      width: '500px',
      data: ''
    });

    dialogRef.afterClosed().subscribe((result) => {
      //Aqui van las acciones que se ejecutan cuando se cierra el cuadro de diálogo
    });
  }

}
