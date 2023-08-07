import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonTableModule } from '../common-table/common-table.module';
import { StudentsSectionComponent } from './students-section.component';

@NgModule({
  declarations: [StudentsSectionComponent],
  imports: [CommonModule, HttpClientModule, CommonTableModule],
  exports: [StudentsSectionComponent],
})
export class StudentsSectionModule {}
