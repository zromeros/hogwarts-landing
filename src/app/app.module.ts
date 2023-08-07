import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffSectionModule } from './staff-section/staff-section.module'; // Importa el módulo de StaffSectionComponent
import { StudentsSectionModule } from './students-section/students-section.module'; // Importa el módulo de StudentsSectionComponent
import { CharactersSectionModule } from './characters-section/characters-section.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StaffSectionModule,
    StudentsSectionModule,
    CharactersSectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
