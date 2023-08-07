import { Component } from '@angular/core';
import { StudentsService } from '@services/students/students.service';

@Component({
  selector: 'app-students-section',
  templateUrl: './students-section.component.html',
  styleUrls: ['./students-section.component.scss'],
})
export class StudentsSectionComponent {
  studentsList: any[] = [];
  isLoading: boolean = false;

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.isLoading = true;
    this.studentsService.fetchStudents().subscribe(
      (data) => {
        this.studentsList = data;
      },
      (error) => {},
      () => {
        this.isLoading = false;
      }
    );
  }
}
