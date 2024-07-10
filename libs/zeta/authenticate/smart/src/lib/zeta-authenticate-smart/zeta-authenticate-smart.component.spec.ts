import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaAuthenticateSmartComponent } from './zeta-authenticate-smart.component';

describe('ZetaAuthenticateSmartComponent', () => {
  let component: ZetaAuthenticateSmartComponent;
  let fixture: ComponentFixture<ZetaAuthenticateSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaAuthenticateSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaAuthenticateSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
