import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ContactNewComponent} from './contact-new.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../contact';
import {ContactService} from '../contact.service';
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

describe('ContactNewComponent', () => {
  let component: ContactNewComponent;
  let fixture: ComponentFixture<ContactNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactNewComponent ],
      imports: [FormsModule, RouterTestingModule, NoopAnimationsModule,
        MatIconModule, MatFormFieldModule, MatInputModule, MatSnackBarModule],
      providers: [
        {provide: ContactService, useClass: MockContactService},
        {provide: AngularFireDatabase, useClass: AngularFireDatabaseStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
