import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaStatsSmartComponent } from './zeta-stats-smart.component';

describe('ZetaStatsSmartComponent', () => {
  let component: ZetaStatsSmartComponent;
  let fixture: ComponentFixture<ZetaStatsSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaStatsSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaStatsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
