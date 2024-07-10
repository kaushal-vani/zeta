import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaHomeUiComponent } from './zeta-home-ui.component';

describe('ZetaHomeUiComponent', () => {
  let component: ZetaHomeUiComponent;
  let fixture: ComponentFixture<ZetaHomeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaHomeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaHomeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
