import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneTimePasswordComponent } from './one-time-password.component';

describe('OneTimePasswordComponent', () => {
  let component: OneTimePasswordComponent;
  let fixture: ComponentFixture<OneTimePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneTimePasswordComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OneTimePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
