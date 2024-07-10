import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaTimelineSmartComponent } from './zeta-timeline-smart.component';

describe('ZetaTimelineSmartComponent', () => {
  let component: ZetaTimelineSmartComponent;
  let fixture: ComponentFixture<ZetaTimelineSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaTimelineSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaTimelineSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
