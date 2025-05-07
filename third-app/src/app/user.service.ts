import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class UserService {
  userData = {
    id: 1001,
    name: 'Vamika',
  };

  loggerService: LoggerService = inject(LoggerService);
  constructor() {}

  getUserData() {
    this.loggerService.message(this.userData, 'Data fetched successfully');
    return this.userData;
  }
}
