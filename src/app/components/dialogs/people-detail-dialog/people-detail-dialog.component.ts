import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonResponse } from 'src/app/model/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';
import { environment } from 'src/environments/environment.prod';


export interface PeopleDetailDialogData {
  personId: number;
}

@Component({
  selector: 'app-people-detail-dialog',
  templateUrl: './people-detail-dialog.component.html',
  styleUrls: ['./people-detail-dialog.component.css']
})
export class PeopleDetailDialogComponent implements OnInit {

  person!: PersonResponse;

  constructor(@Inject(MAT_DIALOG_DATA) private data: PeopleDetailDialogData,
  private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPerson(this.data.personId).subscribe(peopleResult => {
      this.person = peopleResult;
    });
  }

  getPhotoUrl(url: string | undefined): string {
    if(url) {
      let photo = this.person.profile_path;
      return `${environment.img_base_url}${photo}`;
    } else {
      return '';
    }
  }

}
