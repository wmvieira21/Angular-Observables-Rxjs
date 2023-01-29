import { EventEmitter, Injectable, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";

/*Shortcut, best way is to provide this service at app.module (providers)*/
@Injectable({ providedIn: 'root' })

export class UserService {

    /*IMPORTANTE For cross-component comunication always use Subject insted of EventEmitter*/

    //activatedButton = new EventEmitter<boolean>();
    activatedButton = new Subject<boolean>();
}