import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  ChildActivationEnd
} from '@angular/router';
import { LandingService } from 'src/app/pages/services/landing.service';
import { Observable, of, merge } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'abs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  navItems$: Observable<any>;
  routeData$: Observable<any>;

  constructor(
    private landingService: LandingService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.navItems$ = this.landingService.getMenu();
    const data$: Observable<any> = of(
      this.getRouteData(this.activatedRoute.firstChild)
    );
    const data1$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        return this.getRouteData(this.activatedRoute.firstChild);
      })
    );
    this.routeData$ = merge(data$, data1$);
  }

  getRouteData(child: any) {
    while (child) {
      if (child.firstChild) {
        child = child.firstChild;
      } else if (child.snapshot.data) {
        return child.snapshot.data;
      } else {
        return null;
      }
    }
    return null;
  }
}
