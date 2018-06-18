import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConsumerComplaintService } from './consumer-complaint.service';
import { ConsumerComplaint } from './consumer-complaint';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private complaintService: ConsumerComplaintService) { }

  title = 'Consumer complaint';

  complaints$: Observable<ConsumerComplaint[]>;

  ngOnInit() {
    this.getComplaints();
  }

  private getComplaints(): void {
    this.complaintService.getComplaints()
    .subscribe(complaints => this.complaints$ = complaints['data']);
  }

}
