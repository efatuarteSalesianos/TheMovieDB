import { ListService } from './../../services/list.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/interfaces/movies-popular.interface';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  listId !: number;
  movies: Movie[] = [];

  constructor(private listService:ListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listId = params['id'];
      console.log("ID: " + this.listId);
      this.listService.getList(this.listId).subscribe(result => {
        this.movies = result.items;
        console.log(this.movies);
      })
    })
  }

}
