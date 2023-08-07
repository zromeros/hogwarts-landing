import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  fetchCharactersByHouse(house: string | null): Observable<any[]> {
    if (house) {
      return this.http.get<any[]>(
        `https://hp-api.onrender.com/api/characters/house/${house}`
      );
    }
    return new Observable<any[]>();
  }
}
