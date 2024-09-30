import { TestBed } from '@angular/core/testing';

import { LanguageServeService } from './language-serve.service';

describe('LanguageServeService', () => {
  let service: LanguageServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
