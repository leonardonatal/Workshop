import { TestBed, inject } from '@angular/core/testing';

import { CnpjService } from './cnpj.service';

describe('CnpjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CnpjService]
    });
  });

  it('should be created', inject([CnpjService], (service: CnpjService) => {
    expect(service).toBeTruthy();
  }));
});
