import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ConsumerComplaintService } from '../consumer-complaint.service';
import { ConsumerComplaint } from '../consumer-complaint';

@Component({
  selector: 'app-consumer-complaints',
  templateUrl: './consumer-complaints.component.html',
  styleUrls: ['./consumer-complaints.component.css']
})
export class ConsumerComplaintsComponent implements OnInit {

  complaints: ConsumerComplaint[];

  constructor(private complaintService: ConsumerComplaintService) { }

  ngOnInit() {
    this.getComplaints();
  }

  getComplaintsByCompany(id: string) {
    this.complaintService.getComplaintsByCompany(id)
      .subscribe((data: ConsumerComplaint[]) => this.complaints = data['data']);
  }

  getComplaintsByZipCode(id: string) {
    this.complaintService.getComplaintsByZipCode(id)
      .subscribe((data: ConsumerComplaint[]) => this.complaints = data['data']);
  }

  private getComplaints(): void {
    this.complaintService.getComplaints()
      .subscribe((data: ConsumerComplaint[]) => this.complaints = data['data']);
  }


}
