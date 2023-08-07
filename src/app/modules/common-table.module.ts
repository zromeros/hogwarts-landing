import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CommonTableComponent } from '@components/common-table/common-table.component';

@NgModule({
  declarations: [CommonTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
  ], // Agrega los módulos necesarios aquí
  exports: [CommonTableComponent],
})
export class CommonTableModule {}
