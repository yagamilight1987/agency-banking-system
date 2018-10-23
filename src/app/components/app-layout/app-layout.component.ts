import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'abs-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {
  @Input()
  navItems: any[];

  @Input()
  routeData: any;

  @ViewChild('divWrapper')
  divWrapper: ElementRef;

  menuToggleClicked(e) {
    this.divWrapper.nativeElement.classList.toggle('main-wrapper');
  }
}
