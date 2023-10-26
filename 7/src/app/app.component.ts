import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated = false;
  subscriptionOn: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscriptionOn = this.userService.activateSubject.subscribe((data) => {
      this.isActivated = data;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionOn.unsubscribe();
  }
}
