import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {
  constructor() {}

  get(key: string, isArray: boolean = true) {
    let storeData = sessionStorage.getItem(key),
      storeObject;
    try {
      storeObject = JSON.parse(storeData);
      if (!storeObject) {
        storeObject = isArray ? [] : undefined;
      }
    } catch {
      // Can’t trust session storage to have reliable JSON object
      storeObject = isArray ? [] : undefined;
    }

    return storeObject;
  }

  set(key: string, value: any) {
    return sessionStorage.setItem(key, JSON.stringify(value));
  }

  clear(key: string) {
    return sessionStorage.removeItem(key);
  }

  clearAll() {
    return sessionStorage.clear();
  }
}
