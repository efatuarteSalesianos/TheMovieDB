import { Component, OnInit } from '@angular/core';
import { PeoplePopular } from '../model/interfaces/people-popular.interface';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-popular-list',
  templateUrl: './people-popular-list.component.html',
  styleUrls: ['./people-popular-list.component.css']
})
export class PeoplePopularListComponent implements OnInit {

  peoplePopularList: PeoplePopular[] | undefined;

  constructor(private PeopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeoplePopularList();
  }

  getPeoplePopularList() {
    this.PeopleService.getPopularPeople().subscribe(resultado => {
      this.peoplePopularList = resultado.results;
    })
  }

}
