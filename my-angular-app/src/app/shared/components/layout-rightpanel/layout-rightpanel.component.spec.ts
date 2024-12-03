import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRightpanelComponent } from './layout-rightpanel.component';

describe('LayoutRightpanelComponent', () => {
  let component: LayoutRightpanelComponent;
  let fixture: ComponentFixture<LayoutRightpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutRightpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutRightpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
