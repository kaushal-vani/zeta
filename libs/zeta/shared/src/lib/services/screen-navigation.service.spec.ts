import { TestBed } from '@angular/core/testing';

import { ScreenNavigationService } from './screen-navigation.service';

describe('ScreenNavigationService', () => {
  let service: ScreenNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
