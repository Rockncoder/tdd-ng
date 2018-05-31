import {TestBed, inject} from '@angular/core/testing';
import {ContactService} from './contact.service';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireDatabaseStub} from './mock-contact.service';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        {provide: AngularFireDatabase, useClass: AngularFireDatabaseStub}
      ]
    });
  });

  it('should be able to create the ContactService', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
