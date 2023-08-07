import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersSectionComponent } from './characters-section.component';
import { CommonTableModule } from '../common-table/common-table.module';

@NgModule({
  declarations: [CharactersSectionComponent],
  imports: [CommonModule, CommonTableModule],
  exports: [CharactersSectionComponent],
})
export class CharactersSectionModule {}
