import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharactersService } from '@services/characters/characters.service';

@Component({
  selector: 'app-characters-section',
  templateUrl: './characters-section.component.html',
  styleUrls: ['./characters-section.component.scss'],
})
export class CharactersSectionComponent implements OnInit {
  charactersList: any[] = [];
  houses = ['slytherin', 'gryffindor', 'ravenclaw', 'hufflepuff'];
  selectedHouse = new FormControl('gryffindor');

  constructor(private charactersService: CharactersService) {
    this.selectedHouse.setValue('gryffindor');
  }

  ngOnInit(): void {
    this.selectedHouse.valueChanges.subscribe((house) => {
      this.fetchCharactersByHouse(house);
    });

    this.fetchCharactersByHouse(this.selectedHouse.value);
  }

  onDataSourceUpdated(data: any[]) {
    this.charactersList = data;
  }

  fetchCharactersByHouse(house: string | null): void {
    this.charactersService.fetchCharactersByHouse(house).subscribe((data) => {
      console.log({ data });
      this.charactersList = data;
    });
  }
}
