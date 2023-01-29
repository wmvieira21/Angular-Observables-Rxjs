import { Component, OnDestroy, OnInit } from "@angular/core";
import { Route, ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { UserService } from "./user.service";

@Component({
    selector: 'app-user-component',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {
    id: number = 0;
    errorObservable: Subscription = new Subscription;

    constructor(private route: ActivatedRoute, private userService: UserService) { }


    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.id = params['id'];
        });

        /*Simulating throwing and error throught the observable (observer.error), 
        passing data by observer.next and 
        ending the obervable by calling te complete method*/
        const customErrorObservable = new Observable((observer) => {
            let count = 0;
            setInterval(() => {
                if (count < 10) {
                    observer.next(count);
                    if (count == 9) {
                        observer.complete();
                    }
                } else if (count == 10) {
                    observer.error(new Error('Observable error'));
                }
                count++;
            }, 1000);
        });

        /*Listening to all types of return the obervable can give us
        Error and complete will be endind the observable*/
        this.errorObservable = customErrorObservable.subscribe({
            next: (data) => console.log("next=" + data),
            error: (error) => console.log("error=" + error),
            complete: () => console.log("Complete")
        })
    }

    /*Subject
    activatedButton (UserService), emitting a new event by next (observable)*/
    onActived() {
        this.userService.activatedButton.next(true);
    }

    ngOnDestroy(): void {
        this.errorObservable.unsubscribe();
    }
}