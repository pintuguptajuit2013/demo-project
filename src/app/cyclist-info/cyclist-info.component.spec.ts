import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistInfoComponent } from './cyclist-info.component';

describe('CyclistInfoComponent', () => {
  let component: CyclistInfoComponent;
  let fixture: ComponentFixture<CyclistInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
