import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff-section',
  templateUrl: './staff-section.component.html',
  styleUrls: ['./staff-section.component.scss'],
})
export class StaffSectionComponent {
  staffList: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://hp-api.onrender.com/api/characters/staff')
      .subscribe((data) => {
        this.staffList = data;
        console.log({ data });
      });
  }
}
