import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsWholesalerOrBuyerComponent } from './is-wholesaler-or-buyer.component';

describe('IsWholesalerOrBuyerComponent', () => {
  let component: IsWholesalerOrBuyerComponent;
  let fixture: ComponentFixture<IsWholesalerOrBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsWholesalerOrBuyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsWholesalerOrBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
