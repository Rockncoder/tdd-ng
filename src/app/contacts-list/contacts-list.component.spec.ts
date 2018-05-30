import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {ContactsListComponent} from './contacts-list.component';
import {MatCardModule} from '@angular/material/card';
import {ContactService} from '../contact.service';
import {of} from 'rxjs/observable/of';


describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;
  const contactList = [
    {
      firstName: 'Able',
      lastName: 'Baker',
      phone: '555-222-3333',
      email: 'abaker@gmail.com',
      id: '001'
    }
    ];

  beforeEach(async(() => {
    const contactService = jasmine.createSpyObj('ContactService', ['readContacts']);
    const getQuoteSpy = contactService.readContacts.and.returnValue( of(contactList) );


    TestBed.configureTestingModule({
      declarations: [ContactsListComponent],
      imports: [RouterTestingModule, MatCardModule],
      providers: [
        {provide: ContactService, useValue: contactService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
