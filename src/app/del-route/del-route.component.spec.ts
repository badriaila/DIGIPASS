import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelRouteComponent } from './del-route.component';

describe('DelRouteComponent', () => {
  let component: DelRouteComponent;
  let fixture: ComponentFixture<DelRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
