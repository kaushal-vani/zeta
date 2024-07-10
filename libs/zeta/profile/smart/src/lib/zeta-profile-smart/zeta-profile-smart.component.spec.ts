import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaProfileSmartComponent } from './zeta-profile-smart.component';

describe('ZetaProfileSmartComponent', () => {
  let component: ZetaProfileSmartComponent;
  let fixture: ComponentFixture<ZetaProfileSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaProfileSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaProfileSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
