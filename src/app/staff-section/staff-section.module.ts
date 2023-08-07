import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StaffSectionComponent } from './staff-section.component';
import { CommonTableModule } from '../common-table/common-table.module';

@NgModule({
  declarations: [StaffSectionComponent],
  imports: [CommonModule, HttpClientModule, CommonTableModule],
  exports: [StaffSectionComponent],
})
export class StaffSectionModule {}
