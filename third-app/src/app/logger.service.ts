import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  message(data: any, msg: string) {
    console.log('Data Received: ', data, 'message: ', msg);
  }

  error(data: any, msg: string) {
    console.error(msg, data);
  }
}
