import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonTableModule } from '@modules/common-table.module';
import { StaffSectionComponent } from '@components/staff-section/staff-section.component';

@NgModule({
  declarations: [StaffSectionComponent],
  imports: [CommonModule, HttpClientModule, CommonTableModule],
  exports: [StaffSectionComponent],
})
export class StaffSectionModule {}
