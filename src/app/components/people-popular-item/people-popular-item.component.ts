import { KnownFor } from './../../model/interfaces/people-popular.interface';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { PeoplePopular } from '../../model/interfaces/people-popular.interface';
import { MatDialog } from '@angular/material/dialog';
import { PeopleDetailDialogComponent } from '../dialogs/people-detail-dialog/people-detail-dialog.component';

@Component({
  selector: 'app-people-popular-item',
  templateUrl: './people-popular-item.component.html',
  styleUrls: ['./people-popular-item.component.css']
})
export class PeoplePopularItemComponent implements OnInit {

  @Input() peopleInput!: PeoplePopular;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getPhotoUrl(url: string | undefined): string {
    if(url) {
      let photo = this.peopleInput?.profile_path;
      return `${environment.img_base_url}${photo}`;
    } else {
      return '';
    }
  }

  getKnowFor(): KnownFor[] {
    if(this.peopleInput) {
      let movies = this.peopleInput?.known_for;
      return movies;
    } else {
      return [];
    }
  }

  openDialogPersonDetail(id: number | undefined) {
    this.dialog.open(PeopleDetailDialogComponent, {
      width: '500px',
      data: { personId: id }
    });
  }

}
