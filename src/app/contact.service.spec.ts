import {TestBed, inject} from '@angular/core/testing';
import {ContactService} from './contact.service';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

class AngularFireDatabaseStub {
  public list(): any {
    return {
      valueChanges: () => Observable.of([
        {
          firstName: 'Able',
          lastName: 'Baker',
          phone: '555-222-3333',
          email: 'abaker@gmail.com',
          id: '001'
        }
      ])
    };
  }
}

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactService,
        {provide: AngularFireDatabase, useClass: AngularFireDatabaseStub}
      ]
    });
  });

  it('should be able to create the service', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
