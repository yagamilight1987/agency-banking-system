import { Injectable } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  constructor(private helperService: HelperService) {}

  getMenu() {
    return of(this.helperService.menuData);
  }
}
