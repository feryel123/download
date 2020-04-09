import { TestBed } from '@angular/core/testing';

import { HttpInterceptorService } from './basic-auth-interceptor.service';

describe('BasicAuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptorService = TestBed.get(HttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
