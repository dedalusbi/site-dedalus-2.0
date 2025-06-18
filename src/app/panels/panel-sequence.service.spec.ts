import { TestBed } from '@angular/core/testing';

import { PanelSequenceService } from './panel-sequence.service';

describe('PanelSequenceService', () => {
  let service: PanelSequenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelSequenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
