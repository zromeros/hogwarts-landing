import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students-section',
  templateUrl: './students-section.component.html',
  styleUrls: ['./students-section.component.scss'],
})
export class StudentsSectionComponent {
  studentsList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://hp-api.onrender.com/api/characters/students')
      .subscribe((data) => {
        this.studentsList = data;
      });
  }
}
