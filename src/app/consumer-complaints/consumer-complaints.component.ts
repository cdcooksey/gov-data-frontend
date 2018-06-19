import { Component, OnInit } from '@angular/core';

import { ConsumerComplaintService } from '../consumer-complaint.service';
import { ConsumerComplaint } from '../consumer-complaint';

@Component({
  selector: 'app-consumer-complaints',
  templateUrl: './consumer-complaints.component.html',
  styleUrls: ['./consumer-complaints.component.css']
})
export class ConsumerComplaintsComponent implements OnInit {

  complaints$: Observable<ConsumerComplaint[]>;

  constructor(private complaintService: ConsumerComplaintService) { }

  ngOnInit() {
    this.getComplaints();
  }

  private getComplaints(): void {
    this.complaintService.getComplaints()
      .subscribe((data: ConsumerComplaint[]) => this.complaints$ = data['data']);
  }


}
