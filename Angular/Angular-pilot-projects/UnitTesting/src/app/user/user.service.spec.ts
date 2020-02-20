import { TestBed, inject } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserService],
        });
    });

    it('should create the service', inject([UserService], (service: UserService) => {
        expect(service).toBeTruthy();
    }));

    it('the service has user', inject([UserService], (service: UserService) => {
        expect(service.user).toBeTruthy();
    }));
});
