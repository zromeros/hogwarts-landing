import { Component } from '@angular/core';
import { StaffService } from '@services/staff/staff.service';

@Component({
  selector: 'app-staff-section',
  templateUrl: './staff-section.component.html',
  styleUrls: ['./staff-section.component.scss'],
})
export class StaffSectionComponent {
  staffList: any[] = [];
  isLoading: boolean = false;

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.fetchStaff();
  }

  fetchStaff(): void {
    this.isLoading = true;
    this.staffService.fetchStaff().subscribe(
      (data) => {
        this.staffList = data;
      },
      (error) => {},
      () => {
        this.isLoading = false;
      }
    );
  }
}
