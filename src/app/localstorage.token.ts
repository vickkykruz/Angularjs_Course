// How to setup and use localstorage and seasion storage

import { InjectionToken } from "@angular/core";

export const localStorageToken = new InjectionToken<any>('local storage', {
  providedIn: 'root', // Using this we might seur the service is reachable
  factory() { // Calling a factory function to return a new instance of localstorage
    return localStorage
    // For seassionStorage the only difference is to chage it to
    // return seassionStorage
    // To inject location directly window.location
  }
})
