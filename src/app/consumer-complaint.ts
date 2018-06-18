export class ConsumerComplaint {
  id: string;
  complaint_id: number;
  date_received: string;
  date_sent_to_company: any;
  timely_response: boolean;
  consumer_disputed: boolean;
  submitted_via: string;

  constructor(data: any) {
    console.log("I'm the model");
    console.log(data);
  }
}
