import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaypanelComponent } from './overlaypanel.component';

describe('OverlaypanelComponent', () => {
  let component: OverlaypanelComponent;
  let fixture: ComponentFixture<OverlaypanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlaypanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlaypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
