import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCyclistComponent } from './details-cyclist.component';

describe('DetailsCyclistComponent', () => {
  let component: DetailsCyclistComponent;
  let fixture: ComponentFixture<DetailsCyclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCyclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCyclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
