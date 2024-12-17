import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentuploadsComponent } from './recentuploads.component';

describe('RecentuploadsComponent', () => {
  let component: RecentuploadsComponent;
  let fixture: ComponentFixture<RecentuploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentuploadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentuploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
