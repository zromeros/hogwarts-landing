import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
  ],
  exports: [CommonTableComponent],
})
export class CommonTableModule {}
