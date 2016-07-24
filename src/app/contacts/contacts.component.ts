import { Component, OnInit } from '@angular/core';

import { DataService } from './../shared/services/data.service';
import { Contact } from './../shared/models';

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css'],
  providers: [DataService] 
})
export class ContactsComponent implements OnInit {
  contact: Contact;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.contact = this.data.getContact();
  }

}
