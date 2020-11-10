import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryfieldComponent } from './historyfield.component';

describe('HistoryfieldComponent', () => {
  let component: HistoryfieldComponent;
  let fixture: ComponentFixture<HistoryfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
