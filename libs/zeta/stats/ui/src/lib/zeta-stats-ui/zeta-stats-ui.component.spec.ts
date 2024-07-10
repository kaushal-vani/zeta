import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaStatsUiComponent } from './zeta-stats-ui.component';

describe('ZetaStatsUiComponent', () => {
  let component: ZetaStatsUiComponent;
  let fixture: ComponentFixture<ZetaStatsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaStatsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaStatsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
