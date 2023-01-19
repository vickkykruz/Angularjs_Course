import { Injectable } from '@angular/core';

// {
//   providedIn: 'root'
// }
@Injectable()
export class LoggerService {

  constructor() { }

  log(mes: string) {
    console.log(mes);
  }

}
