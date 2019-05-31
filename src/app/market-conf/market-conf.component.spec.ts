import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketConfComponent } from './market-conf.component';

describe('MarketConfComponent', () => {
  let component: MarketConfComponent;
  let fixture: ComponentFixture<MarketConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
