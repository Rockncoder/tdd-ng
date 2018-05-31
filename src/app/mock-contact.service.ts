import {Observable} from 'rxjs/Observable';
import {Contact} from './contact';

const contactList = [{
  firstName: 'Able',
  lastName: 'Baker',
  phone: '555-222-3333',
  email: 'abaker@gmail.com',
  id: '001'
}];

export class AngularFireDatabaseStub {
  public list(): any {
    return {
      valueChanges: () => Observable.of(contactList)
    };
  }
}

export class MockContactService {
  public readContact(id: String): Observable<Contact> {
    return Observable.of(contactList[0]);
  }

  public readContacts(): Observable<Contact[]> {
    return Observable.of(contactList);
  }
}
