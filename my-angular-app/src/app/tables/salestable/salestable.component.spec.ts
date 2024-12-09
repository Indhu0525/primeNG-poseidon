import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestableComponent } from './salestable.component';

describe('SalestableComponent', () => {
  let component: SalestableComponent;
  let fixture: ComponentFixture<SalestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalestableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
