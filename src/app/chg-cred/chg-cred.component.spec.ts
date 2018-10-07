import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChgCredComponent } from './chg-cred.component';

describe('ChgCredComponent', () => {
  let component: ChgCredComponent;
  let fixture: ComponentFixture<ChgCredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChgCredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChgCredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
