import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSub: Subscription;
  cusObsSub: Subscription;

  constructor() { }

  ngOnDestroy() {
    this.numberObsSub.unsubscribe();
    this.cusObsSub.unsubscribe();
  }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(map(
        (data: number) => {
          return data * 2;
        }
      ));

    this.numberObsSub = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first pck');
      }, 2000);
      setTimeout(() => {
        observer.next('second pck');
      }, 4000);
      setTimeout(() => {
        //observer.error('error');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        //observer.error('error');
        observer.next('third pck');
      }, 6000);
    });

    this.cusObsSub = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (err: string) => {
        console.log(err);
      },
      () => {
        console.log('Done');
      }
    );
  }

}
