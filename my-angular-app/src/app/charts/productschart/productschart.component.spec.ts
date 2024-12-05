import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductschartComponent } from './productschart.component';

describe('ProductschartComponent', () => {
  let component: ProductschartComponent;
  let fixture: ComponentFixture<ProductschartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductschartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
