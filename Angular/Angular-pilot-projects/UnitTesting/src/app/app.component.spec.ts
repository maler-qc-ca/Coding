import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let compiled: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'UnitTesting'`, () => {
        expect(component.title).toEqual('UnitTesting');
    });

    it('should render title', () => {
        fixture.detectChanges();
        expect(compiled.querySelector('h1').textContent).toContain('UnitTesting');
    });
});
