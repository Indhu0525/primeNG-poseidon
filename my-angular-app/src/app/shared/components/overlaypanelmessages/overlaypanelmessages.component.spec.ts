import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlaypanelmessagesComponent } from './overlaypanelmessages.component';

describe('OverlaypanelmessagesComponent', () => {
  let component: OverlaypanelmessagesComponent;
  let fixture: ComponentFixture<OverlaypanelmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlaypanelmessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlaypanelmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
