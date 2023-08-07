import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-characters-section',
  templateUrl: './characters-section.component.html',
  styleUrls: ['./characters-section.component.scss'],
})
export class CharactersSectionComponent implements OnInit {
  charactersList: any[] = [];
  houses = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff'];
  selectedHouse = new FormControl('');

  constructor(private http: HttpClient) {
    this.selectedHouse.setValue('gryffindor');
  }

  ngOnInit(): void {
    this.selectedHouse.valueChanges.subscribe((house) => {
      if (house) {
        this.http
          .get<any[]>(
            `https://hp-api.onrender.com/api/characters/house/${house}`
          )
          .subscribe((data) => {
            this.charactersList = data;
          });
      }
    });
  }
}
