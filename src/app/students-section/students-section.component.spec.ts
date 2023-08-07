import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsSectionComponent } from './students-section.component';

describe('StudentsSectionComponent', () => {
  let component: StudentsSectionComponent;
  let fixture: ComponentFixture<StudentsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
