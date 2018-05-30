import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { ContactDetailsComponent } from './contact-details.component';
import {ContactService} from '../contact.service';
import {Observable} from 'rxjs/Observable';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ],
      imports: [FormsModule, RouterTestingModule, MatInputModule, MatIconModule, MatSnackBarModule],
      providers: [
        {
          provide: ContactService,
          useClass: class {
            getContactById = jasmine.createSpy('getContactById');
            readContact = jasmine.createSpyObj('readContact', ['readContact']).and.returnValue(Observable.of('Hello'));

            }
        }
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
