import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  providers: [ContactService]
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Contact[]>;

  constructor(private contactService: ContactService,
              private af: AngularFireDatabase,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.contacts = this.contactService.readContacts();
  }

  deleteContact(contact) {
    this.contactService.deleteContact(contact);
    this.snackBar.open(`Contact '${contact.firstName} ${contact.lastName}' deleted.`, '', {duration: 3000});
  }
}
