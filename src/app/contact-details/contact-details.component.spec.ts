import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ContactDetailsComponent} from './contact-details.component';
import {ContactService} from '../contact.service';
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
  public readContact(id: String): Observable<Contact> {
    return Observable.of(contactList[0]);
  }

  public readContacts(): Observable<Contact[]> {
    return Observable.of(contactList);
  }
}

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDetailsComponent],
      imports: [FormsModule, RouterTestingModule, NoopAnimationsModule, MatInputModule, MatIconModule, MatSnackBarModule],
      providers: [
        {provide: ContactService, useClass: MockContactService},
        {provide: AngularFireDatabase, useClass: AngularFireDatabaseStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
