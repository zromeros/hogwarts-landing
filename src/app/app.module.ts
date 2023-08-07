import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffSectionComponent } from './staff-section/staff-section.component';
import { CharactersSectionComponent } from './characters-section/characters-section.component';
import { StudentsSectionComponent } from './students-section/students-section.component';
import { CommonTableComponent } from './common-table/common-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffSectionComponent,
    CharactersSectionComponent,
    StudentsSectionComponent,
    CommonTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
