import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticatePageComponent } from './authenticate-page.component';

describe('AuthenticatePageComponent', () => {
  let component: AuthenticatePageComponent;
  let fixture: ComponentFixture<AuthenticatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticatePageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
