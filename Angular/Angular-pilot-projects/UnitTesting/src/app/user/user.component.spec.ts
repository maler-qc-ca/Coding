import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';
import { DebugElement } from '@angular/core';
import { HighlightDirective } from '../shared/highlight.directive';

describe('UserComponent', () => {
    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    let debugElement: DebugElement;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserComponent, HighlightDirective],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        element = debugElement.nativeElement;
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it('should use the user name from the service', () => {
        const userService = fixture.debugElement.injector.get(UserService);
        fixture.detectChanges();

        expect(userService.user.name).toEqual(component.user.name);
    });

    it('should display the user name if user is logged in', () => {
        component.isLoggedIn = true;
        fixture.detectChanges();

        expect(element.querySelector('p').textContent).toContain(component.user.name);
    });

    it('should display - Please log in - if user is not logged in', () => {
        component.isLoggedIn = false;
        fixture.detectChanges();

        expect(element.querySelector('p').textContent).not.toContain(component.user.name);
    });

    it('should display - Please log in - if user is not logged in - query By css', () => {
        component.isLoggedIn = true;
        fixture.detectChanges();

        expect(element.querySelector('h1').innerText).toBe('User logged in');
    });

    it('should fetch data successfully if not called asynchronously - async', async(() => {
        const dataService = fixture.debugElement.injector.get(DataService);
        const spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.data).toBe('Data');
        });
    }));

    it('should fetch data successfully if not called asynchronously - fakeAsync', fakeAsync(() => {
        const dataService = fixture.debugElement.injector.get(DataService);
        const spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));

        fixture.detectChanges();

        tick();
        expect(component.data).toBe('Data');
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.all().length).toEqual(1);

        fixture.detectChanges();
        expect(element.querySelector('h4').innerText).toBe('Data');
    }));

    it('key up should be true', () => {
        expect(component.keyUp).toBeFalsy();
    });

    it('key up should be flase after key toggle', () => {
        expect(component.keyUp).toBeFalsy();
        component.keyToggle();

        expect(component.keyUp).toBeTruthy();
    });

    it('on click', async(() => {
        const button = fixture.debugElement.nativeElement.querySelector('button');
        expect(component.click).toEqual('');

        button.click();
        expect(component.click).toEqual('Clicked');
    }));

    it('should have skyblue <h2>', () => {
        fixture.detectChanges();
        const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
        const bgColor = h2.style.backgroundColor;
        expect(bgColor).toBe('skyblue');
    });

    it('should have lightgray <h3>', () => {
        fixture.detectChanges();
        const h3: HTMLElement = fixture.nativeElement.querySelector('h3');
        const bgColor = h3.style.backgroundColor;
        expect(bgColor).toBe('lightgray');
    });
});
