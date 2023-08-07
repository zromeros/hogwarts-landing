import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}

  fetchStaff(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://hp-api.onrender.com/api/characters/staff'
    );
  }
}
