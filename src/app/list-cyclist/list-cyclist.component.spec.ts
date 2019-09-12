import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCyclistComponent } from './list-cyclist.component';

describe('ListCyclistComponent', () => {
  let component: ListCyclistComponent;
  let fixture: ComponentFixture<ListCyclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCyclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCyclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
