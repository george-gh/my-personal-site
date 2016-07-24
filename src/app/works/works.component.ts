import { Component, OnInit, Output } from '@angular/core';

import { DataService } from './../shared/services/data.service';
import { Customer } from './../shared/models/customer';
import { WorkDetailsComponent } from './work-details.component';

@Component({
  moduleId: module.id,
  selector: 'app-works',
  templateUrl: 'works.component.html',
  styleUrls: ['works.component.css'],
  providers: [DataService],
  directives: [WorkDetailsComponent] 
})
export class WorksComponent implements OnInit {
  customers: Customer[];
  @Output() currentCustomer: Customer;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.customers = this.data.getCustomers();
  }

  selectCustomer(customer: Customer) {
    this.currentCustomer = customer;
  }

}
