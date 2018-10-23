import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  get(key: string, isArray: boolean = true) {
    let storeData = localStorage.getItem(key),
      storeObject;
    try {
      storeObject = JSON.parse(storeData);
      if (!storeObject) {
        storeObject = isArray ? [] : undefined;
      }
    } catch {
      // Can’t trust local storage to have reliable JSON object
      storeObject = isArray ? [] : undefined;
    }

    return storeObject;
  }

  set(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  clear(key: string) {
    return localStorage.removeItem(key);
  }

  clearAll() {
    return localStorage.clear();
  }
}
