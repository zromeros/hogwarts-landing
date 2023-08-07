import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hogwarts-landing';

  selectedOption: string = 'staff';

  onOptionSelected(option: string) {
    this.selectedOption = option;
  }

  isOptionSelected(option: string): boolean {
    return this.selectedOption === option;
  }
}
