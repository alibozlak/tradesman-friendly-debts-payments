import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerDebtsPaymentsComponent } from './wholesaler-debts-payments.component';

describe('WholesalerDebtsPaymentsComponent', () => {
  let component: WholesalerDebtsPaymentsComponent;
  let fixture: ComponentFixture<WholesalerDebtsPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesalerDebtsPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesalerDebtsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
