import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent {
  @Input() dataSource: any[] = [];
  @Input() options: string[] = [];
  @Input() optionsTitle: string = '';
  @Input() selectedOption: FormControl<any> = new FormControl(
    this.options[0] || ''
  );
  @Input() title: string = '';
  @Output() dataSourceUpdated = new EventEmitter<any[]>();

  constructor() {}

  updateDataSource(data: any[]) {
    this.dataSource = data;
    this.dataSourceUpdated.emit(data);
  }
}
