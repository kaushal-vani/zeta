import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificationFailureComponent } from './verification-failure.component';

describe('VerificationFailureComponent', () => {
  let component: VerificationFailureComponent;
  let fixture: ComponentFixture<VerificationFailureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificationFailureComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificationFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
