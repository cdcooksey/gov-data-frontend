import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ConsumerComplaintService } from '../consumer-complaint.service';
import { ConsumerComplaint } from '../consumer-complaint';
import { ZipCode } from '../zip-code';
import { Company } from '../company';

@Component({
  selector: 'app-consumer-complaints',
  templateUrl: './consumer-complaints.component.html',
  styleUrls: ['./consumer-complaints.component.css']
})
export class ConsumerComplaintsComponent implements OnInit {

  complaints: ConsumerComplaint[];
  zipCodes: ZipCode[];
  companies: Company[];
  expandedComplaint: string; // TODO: Type as ConsumerComplaint model

  constructor(private complaintService: ConsumerComplaintService) { 
    this.resetState();
  }

  ngOnInit() {
    this.getComplaints();
  }

  /**
   * # TODO: Pass in ConsumerComplaint model
   * id: string ConsumerComplaint.id
   */
  expandComplaint(id: string) {
    this.expandedComplaint = id;
    console.log(`expand() got ${id}`);
  }

  getComplaintsByCompany(id: string) {
    this.resetState();
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

  getCompaniesBySearch(name: string) {
    if(name.length < 1) {
      this.companies = [];
      return this.getComplaints();
    }
    this.complaintService.getCompaniesBySearch(name)
      .subscribe((data: Company[]) => this.companies= data['data']);
  } 

  private getComplaints(): void {
    this.complaintService.getComplaints()
      .subscribe((data: ConsumerComplaint[]) => this.complaints = data['data']);
  }

  private resetState() {
    this.zipCodes = [];
    this.companies = [];
    this.expandedComplaint = ''; // TODO Type as ConsumerComplaint model
  }

}
