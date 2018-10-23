import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abs-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {
  @Input()
  navItems: any[];

  constructor() {}

  ngOnInit() {}
}
