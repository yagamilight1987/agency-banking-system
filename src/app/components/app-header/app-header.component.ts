import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/services';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'abs-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  @Output()
  menuToggler: EventEmitter<boolean>;

  constructor(
    private router: Router,
    private sessionStorageService: SessionStorageService
  ) {
    this.menuToggler = new EventEmitter();
  }

  logout() {
    this.sessionStorageService.clearAll();
    this.router.navigate([AppConstants.APP_NAVIGATION_URLS.login]);
  }
}
