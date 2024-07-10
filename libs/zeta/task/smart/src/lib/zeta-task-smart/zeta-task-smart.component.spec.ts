import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaTaskSmartComponent } from './zeta-task-smart.component';

describe('ZetaTaskSmartComponent', () => {
  let component: ZetaTaskSmartComponent;
  let fixture: ComponentFixture<ZetaTaskSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaTaskSmartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaTaskSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
