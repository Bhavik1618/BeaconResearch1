import { TestBed } from '@angular/core/testing';

import { BenefitcalculatorService } from './benefitcalculator.service';

describe('BenefitcalculatorService', () => {
  let service: BenefitcalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefitcalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
