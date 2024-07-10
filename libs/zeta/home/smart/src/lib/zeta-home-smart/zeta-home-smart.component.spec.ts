import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaHomeSmartComponent } from './zeta-home-smart.component';

describe('ZetaHomeSmartComponent', () => {
  let component: ZetaHomeSmartComponent;
  let fixture: ComponentFixture<ZetaHomeSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaHomeSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaHomeSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
