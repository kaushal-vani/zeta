import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaTaskUiComponent } from './zeta-task-ui.component';

describe('ZetaTaskUiComponent', () => {
  let component: ZetaTaskUiComponent;
  let fixture: ComponentFixture<ZetaTaskUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaTaskUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaTaskUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
