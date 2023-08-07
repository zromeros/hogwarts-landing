import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffSectionModule } from '@modules/staff-section.module';
import { StudentsSectionModule } from '@modules/students-section.module';
import { CharactersSectionModule } from '@modules/characters-section.module';

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
