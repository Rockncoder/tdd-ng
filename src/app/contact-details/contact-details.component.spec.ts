import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ContactDetailsComponent} from './contact-details.component';
import {ContactService} from '../contact.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {MockContactService, AngularFireDatabaseStub} from '../mock-contact.service';
// import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

/*
 An example an angular material component mock
*/
//
// @Component({
//   selector: 'mat-icon',
//   template: '<div></div>'
// })
// class MockIcon {}

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDetailsComponent],
      imports: [FormsModule, RouterTestingModule, NoopAnimationsModule, MatIconModule, MatInputModule, MatSnackBarModule],
      providers: [
        {provide: ContactService, useClass: MockContactService},
        {provide: AngularFireDatabase, useClass: AngularFireDatabaseStub}
      ],
      // schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ContactDetailsComponent', () => {
    expect(component).toBeTruthy();
  });
});
