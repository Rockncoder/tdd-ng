import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ContactsListComponent} from './contacts-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ContactService} from '../contact.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {MockContactService, AngularFireDatabaseStub} from '../mock-contact.service';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsListComponent],
      imports: [RouterTestingModule, MatCardModule, MatSnackBarModule],
      providers: [
        {provide: ContactService, useClass: MockContactService},
        {provide: AngularFireDatabase, useClass: AngularFireDatabaseStub}
      ]
    });

    component = TestBed.createComponent(ContactsListComponent).componentInstance;
  });

  it('should create ContactsListComponent', () => {
    expect(component).toBeTruthy();
  });
});
