import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorywellComponent } from './historywell.component';

describe('HistorywellComponent', () => {
  let component: HistorywellComponent;
  let fixture: ComponentFixture<HistorywellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorywellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorywellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
