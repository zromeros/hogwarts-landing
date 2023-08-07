import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  fetchStudents(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://hp-api.onrender.com/api/characters/students'
    );
  }
}
