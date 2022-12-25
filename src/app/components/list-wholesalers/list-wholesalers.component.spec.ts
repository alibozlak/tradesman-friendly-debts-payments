import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWholesalersComponent } from './list-wholesalers.component';

describe('ListWholesalersComponent', () => {
  let component: ListWholesalersComponent;
  let fixture: ComponentFixture<ListWholesalersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWholesalersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWholesalersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
