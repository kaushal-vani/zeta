import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaAuthenticateUiComponent } from './zeta-authenticate-ui.component';

describe('ZetaAuthenticateUiComponent', () => {
  let component: ZetaAuthenticateUiComponent;
  let fixture: ComponentFixture<ZetaAuthenticateUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaAuthenticateUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaAuthenticateUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
