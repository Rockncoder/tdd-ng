import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {ContactsListComponent} from './contacts-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ContactService} from '../contact.service';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../contact';
import {AngularFireDatabase} from 'angularfire2/database';

const contactList = [{
  firstName: 'Able',
  lastName: 'Baker',
  phone: '555-222-3333',
  email: 'abaker@gmail.com',
  id: '001'
}];

class AngularFireDatabaseStub {
  public list(): any {
    return {
      valueChanges: () => Observable.of(contactList)
    };
  }
}

class MockContactService {
  public readContacts(): Observable<Contact[]> {
    return Observable.of(contactList);
  }
}

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  // let fixture: ComponentFixture<ContactsListComponent>;
  let contactService: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsListComponent],
      imports: [RouterTestingModule, MatCardModule, MatSnackBarModule],
      providers: [
        {provide: ContactService, useClass: MockContactService},
        {provide: AngularFireDatabase, useClass: AngularFireDatabaseStub}
      ]
    });
    contactService = TestBed.get(ContactService);
    component = TestBed.createComponent(ContactsListComponent).componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
