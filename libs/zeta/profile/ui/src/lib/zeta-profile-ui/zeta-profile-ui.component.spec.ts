import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaProfileUiComponent } from './zeta-profile-ui.component';

describe('ZetaProfileUiComponent', () => {
  let component: ZetaProfileUiComponent;
  let fixture: ComponentFixture<ZetaProfileUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaProfileUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaProfileUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
