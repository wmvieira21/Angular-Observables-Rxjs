import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  intervalObservable: Subscription = new Subscription;
  subsCustomObservable: Subscription = new Subscription;


  ngOnInit(): void {
    /*Creating an observable with interval. Not a real observable here. The interval itself is an observale
    We're just subscribing to it.*/
    this.intervalObservable = interval(1000).subscribe((count) => {
      console.log(count);
    });

    /*Creating an observable from scratch.
    observer.next will emit a new event each time the interval is triggered*/
    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(++count);
      }, 1000);
    });

    /*Listening to the newly created observable (customObservable) 
    This method will be executed everytime observer.next is called*/
    this.subsCustomObservable = customObservable.subscribe((data) => {
      console.log('new observable=' + data);
    });


  }

  ngOnDestroy(): void {
    this.intervalObservable.unsubscribe();
    this.subsCustomObservable.unsubscribe();
  }
}
