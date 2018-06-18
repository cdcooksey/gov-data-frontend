import { TestBed, inject } from '@angular/core/testing';

import { ConsumerComplaintService } from './consumer-complaint.service';

describe('ConsumerComplaintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumerComplaintService]
    });
  });

  it('should be created', inject([ConsumerComplaintService], (service: ConsumerComplaintService) => {
    expect(service).toBeTruthy();
  }));
});
