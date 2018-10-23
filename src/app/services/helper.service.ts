import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { AppConstants } from 'src/app/app.constants';

@Injectable()
export class HelperService {
  constructor(private sessionStorageService: SessionStorageService) {}

  get isAuthenticated(): boolean {
    return this.sessionStorageService.get(
      AppConstants.SESSION_STORAGE_KEYS.token,
      false
    )
      ? true
      : false;
  }

  get token(): string {
    return this.sessionStorageService.get(
      AppConstants.SESSION_STORAGE_KEYS.token,
      false
    );
  }

  get userData(): any {
    return this.sessionStorageService.get(
      AppConstants.SESSION_STORAGE_KEYS.userData,
      false
    );
  }

  get menuData(): any {
    return this.sessionStorageService.get(
      AppConstants.SESSION_STORAGE_KEYS.menuData
    );
  }
}
