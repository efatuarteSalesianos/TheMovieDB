import { List } from './../../../model/interfaces/list.interface';
import { ListService } from './../../../services/list.service';
import { Component, Inject, OnInit } from '@angular/core';
import { listDTO } from 'src/app/model/dto/list.dto';
import { addTolistDTO } from 'src/app/model/dto/addToList.dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AddToListDialogData {
  movieId: number
}
@Component({
  selector: 'app-add-to-list-dialog',
  templateUrl: './add-to-list-dialog.component.html',
  styleUrls: ['./add-to-list-dialog.component.css']
})

export class AddToListDialogComponent implements OnInit {

  listDTO = new listDTO();
  addTolistDTO = new addTolistDTO();
  lists: List[] = [];
  listSelected!: number;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AddToListDialogData,
  private listService: ListService, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.listService.getLists().subscribe(result => {
      this.lists = result.results;
    });
  }

  createList() {
    if(this.listDTO.name===""){
      this.snackBar.open('No se puede crear una lista sin nombre', 'Aceptar');
    }
    else {
    this.listService.createList(this.listDTO).subscribe(result => {
      this.listDTO = result;
      this.snackBar.open('Se ha creado la lista correctamente', 'Aceptar');
      history.go(0)
      });
    }
  }

  addMovieToList() {
    this.addTolistDTO.media_id = this.data.movieId;
    this.listService.addMovieToList(this.listSelected, this.addTolistDTO).subscribe(result => {
      this.snackBar.open('Película añadida', 'Aceptar');
    });
  }
}
