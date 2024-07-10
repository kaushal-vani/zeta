import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZetaSharedComponent } from './zeta-shared.component';

describe('ZetaSharedComponent', () => {
  let component: ZetaSharedComponent;
  let fixture: ComponentFixture<ZetaSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZetaSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZetaSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
