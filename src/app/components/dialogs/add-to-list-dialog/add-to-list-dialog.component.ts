import { Router } from '@angular/router';
import { List } from './../../../model/interfaces/list.interface';
import { ListService } from './../../../services/list.service';
import { Component, Inject, OnInit } from '@angular/core';
import { listDTO } from 'src/app/model/dto/list.dto';
import { AddTolistDTO } from 'src/app/model/dto/addToList.dto';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

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
  addTolistDTO = new AddTolistDTO();
  lists: List[] = [];
  listSelected!: number;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AddToListDialogData,
  public dialogRef: MatDialogRef<AddToListDialogComponent>,
  private listService: ListService, private dialog: MatDialog, private snackBar: MatSnackBar, private route: Router
  , private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listService.getLists().subscribe(result => {
      this.lists = result.results;
    });
  }

  createList() {
    if(this.listForm.get('name')?.invalid){
      this.snackBar.open('No se puede crear una lista sin nombre', 'Aceptar', { duration: 3000 });
    }
    else {
    this.listService.createList(this.listDTO).subscribe(result => {
      this.listSelected = result.list_id;
      this.addTolistDTO.media_id = this.data.movieId;
      this.listService.addMovieToList(this.listSelected, this.addTolistDTO).subscribe(result => {
        this.snackBar.open('Película añadida', 'Aceptar', { duration: 3000 });
        this.dialogRef.close();
        this.route.navigate(['/list/', this.listSelected])
      });
      this.snackBar.open('Se ha creado la lista correctamente', 'Aceptar', { duration: 3000 });
      });
    }
  }

  addMovieToList() {
    this.addTolistDTO.media_id = this.data.movieId;
    this.listService.addMovieToList(this.listSelected, this.addTolistDTO).subscribe(result => {
      this.snackBar.open('Película añadida', 'Aceptar', { duration: 3000 });
      this.dialogRef.close();
    });
  }

  listForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });
}
