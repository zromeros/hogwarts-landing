import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';

type HouseLogoMap = {
  [key: string]: string;
};

const logoMap: HouseLogoMap = {
  slytherin: 'assets/icons/slytherin.png',
  gryffindor: 'assets/icons/gryffindor.png',
  ravenclaw: 'assets/icons/ravenclaw.png',
  hufflepuff: 'assets/icons/hufflepuff.png',
};

const defaultLogo = 'assets/icons/hogwarts.png';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent {
  mobile: boolean = false;
  @Input() dataSource: any[] = [];
  @Input() options: string[] = [];
  @Input() optionsTitle: string = '';
  @Input() selectedOption: FormControl<any> = new FormControl(
    this.options[0] || ''
  );
  @Input() title: string = '';
  @Input() loading: boolean = true;
  @Output() dataSourceUpdated = new EventEmitter<any[]>();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((result) => {
        this.mobile = result.matches;
      });
  }

  updateDataSource(data: any[]) {
    this.dataSource = data;
    this.dataSourceUpdated.emit(data);
  }

  getHouseLogo(house: string): string {
    return logoMap[house.toLowerCase()] || defaultLogo;
  }

  getAgeFromYearOfBirth(yearOfBirth: number | null): string {
    if (yearOfBirth === null) {
      return 'n/a';
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    return age.toString();
  }
}
