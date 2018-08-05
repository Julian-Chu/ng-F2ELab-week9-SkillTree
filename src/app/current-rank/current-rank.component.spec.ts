import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRankComponent } from './current-rank.component';

describe('CurrentRankComponent', () => {
  let component: CurrentRankComponent;
  let fixture: ComponentFixture<CurrentRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
