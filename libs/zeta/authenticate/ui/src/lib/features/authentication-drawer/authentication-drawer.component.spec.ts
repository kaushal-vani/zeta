import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationDrawerComponent } from './authentication-drawer.component';

describe('AuthenticationDrawerComponent', () => {
  let component: AuthenticationDrawerComponent;
  let fixture: ComponentFixture<AuthenticationDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationDrawerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
