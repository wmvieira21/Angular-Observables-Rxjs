import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isActivated = false;

  title = 'Angular-Observables';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    /*Listening to activatedButton (Subject created in UserService)*/
    this.userService.activatedButton.subscribe((data) => {
      this.isActivated = !this.isActivated;
    });
  }
}
