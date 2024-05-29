/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemeServiceService } from './themeService.service';

describe('Service: ThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeServiceService]
    });
  });

  it('should ...', inject([ThemeServiceService], (service: ThemeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
