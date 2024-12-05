import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficchartComponent } from './trafficchart.component';

describe('TrafficchartComponent', () => {
  let component: TrafficchartComponent;
  let fixture: ComponentFixture<TrafficchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficchartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
