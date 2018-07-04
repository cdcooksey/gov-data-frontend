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
  pageNumber: number;

  constructor(private complaintService: ConsumerComplaintService) { 
    this.complaints = [];
    this.resetState();
  }

  ngOnInit() {
    this.getComplaints();
  }

  /**
   * TODO: Pass in ConsumerComplaint model
   * id: string ConsumerComplaint.id
   */
  toggleExpandComplaint(id: string) {
    if(this.expandedComplaint == id) {
      // unasign, they've double clicked
      return this.expandedComplaint = '';
    }
    else {
      // assign to expand details
      return this.expandedComplaint = id;
    }
  }

  getComplaintsByCompany(id: string) {
    this.resetState();
    this.complaintService.getComplaintsByCompany(id).subscribe((data: ConsumerComplaint[]) => { 
      for(let complaint of data['data']) {
        this.complaints.push(complaint]); 
      }
    }
  }

  getComplaintsByZipCode(id: string) {
    this.resetState();

    this.complaintService.getComplaintsByZipCode(id).subscribe((data: ConsumerComplaint[]) => { 
      for(let complaint of data['data']) {
        this.complaints.push(complaint]); 
      }
    }
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

  getComplaints(): void {
    this.complaintService.getComplaints(this.pageNumber).subscribe((data: ConsumerComplaint[]) => { 
      for(let complaint of data['data']) {
        this.complaints.push(complaint]); 
      }
    });
  }

  hasComplaints() {
    return this.complaints.length > 0;
  }

  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.getComplaints();
  }

  private resetState() {
    this.zipCodes = [];
    this.companies = [];
    this.expandedComplaint = ''; // TODO Type as ConsumerComplaint model
    this.pageNumber = 0;
    this.complaints = [];
  }

}
