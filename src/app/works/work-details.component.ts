import { Component, OnInit, Input } from '@angular/core';

import { Customer } from './../shared/models/customer';

@Component({
  moduleId: module.id,
  selector: 'app-work-details',
  templateUrl: 'work-details.component.html',
  styleUrls: ['work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {
  @Input() selectedCustomer: Customer;

  constructor() { }

  ngOnInit() {
  }

}
