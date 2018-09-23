import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardSearchComponent } from './admin-dashboard-search.component';

describe('AdminDashboardSearchComponent', () => {
  let component: AdminDashboardSearchComponent;
  let fixture: ComponentFixture<AdminDashboardSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
