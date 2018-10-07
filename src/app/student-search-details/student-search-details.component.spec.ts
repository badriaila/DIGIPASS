import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSearchDetailsComponent } from './student-search-details.component';

describe('StudentSearchDetailsComponent', () => {
  let component: StudentSearchDetailsComponent;
  let fixture: ComponentFixture<StudentSearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSearchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
