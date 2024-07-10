import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaTimelineUiComponent } from './zeta-timeline-ui.component';

describe('ZetaTimelineUiComponent', () => {
  let component: ZetaTimelineUiComponent;
  let fixture: ComponentFixture<ZetaTimelineUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaTimelineUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaTimelineUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
