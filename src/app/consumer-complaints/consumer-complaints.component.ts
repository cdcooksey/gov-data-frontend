import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ConsumerComplaintService } from '../consumer-complaint.service';
import { ConsumerComplaint } from '../consumer-complaint';
import { ZipCode } from '../zip-code';

@Component({
  selector: 'app-consumer-complaints',
  templateUrl: './consumer-complaints.component.html',
  styleUrls: ['./consumer-complaints.component.css']
})
export class ConsumerComplaintsComponent implements OnInit {

  complaints: ConsumerComplaint[];
  zipCodes: ZipCode[];

  constructor(private complaintService: ConsumerComplaintService) { 
    this.resetState();
  }

  ngOnInit() {
    this.getComplaints();
  }

  getComplaintsByCompany(id: string) {
    this.complaintService.getComplaintsByCompany(id)
      .subscribe((data: ConsumerComplaint[]) => this.complaints = data['data']);
  }

  getComplaintsByZipCode(id: string) {
    this.resetState();
    this.complaintService.getComplaintsByZipCode(id)
      .subscribe((data: ConsumerComplaint[]) => this.complaints = data['data']);
  }

  getZipCodesBySearch(zipCode: string) {
    if(zipCode.length < 1) {
      this.zipCodes = [];
      return this.getComplaints();
    }
    this.complaintService.getZipCodesBySearch(zipCode)
      .subscribe((data: ZipCode[]) => this.zipCodes = data['data']);
  }

  private getComplaints(): void {
    this.complaintService.getComplaints()
      .subscribe((data: ConsumerComplaint[]) => this.complaints = data['data']);
  }

  private resetState() {
    this.zipCodes = [];
  }

}
