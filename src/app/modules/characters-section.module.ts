import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersSectionComponent } from '@components/characters-section/characters-section.component';
import { CommonTableModule } from '@modules/common-table.module';

@NgModule({
  declarations: [CharactersSectionComponent],
  imports: [CommonModule, CommonTableModule],
  exports: [CharactersSectionComponent],
})
export class CharactersSectionModule {}
