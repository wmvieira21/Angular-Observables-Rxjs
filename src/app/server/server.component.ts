import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {

  observableOperator: Subscription = new Subscription;


  ngOnInit(): void {

    const observableWithPipe = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        if (count < 10) {
          observer.next(count);
        } else {
          observer.error(new Error('Observable error'));
        }
        count++;
      }, 1000);
    });
    
    /*Operators.
    method pipe is used to alter ou filter the information coming from the observable
    *filter, return true or false. It defines if the data will be consider by the obeserver (subcription)
    *map, it can alter the data we're recieving and pass it to the obeserver*/
    this.observableOperator = observableWithPipe.pipe(filter((data: any) => {
      return +data != 4;
    }), map((data) => {
      return 'Pipe=' + data;
    })).subscribe({
      next: (dataPipe) => { console.log(dataPipe) },
      error: (error) => { console.log(error) }
    });

  }
  ngOnDestroy(): void {
    this.observableOperator.unsubscribe();
  }
}
