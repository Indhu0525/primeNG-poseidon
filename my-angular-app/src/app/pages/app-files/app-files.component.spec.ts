import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilesComponent } from './app-files.component';

describe('AppFilesComponent', () => {
  let component: AppFilesComponent;
  let fixture: ComponentFixture<AppFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
