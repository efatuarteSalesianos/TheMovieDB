import { List, ListResponse } from './../../../model/interfaces/list.interface';
import { ListService } from './../../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { listDTO } from 'src/app/model/dto/list.dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-to-list-dialog',
  templateUrl: './add-to-list-dialog.component.html',
  styleUrls: ['./add-to-list-dialog.component.css']
})
export class AddToListDialogComponent implements OnInit {

  listDTO = new listDTO();
  lists: List[] = [];
  listSelected!: number;

  constructor(private listService: ListService, private snackBar: MatSnackBar) { }

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
}
