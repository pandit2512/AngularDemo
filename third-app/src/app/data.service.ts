import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  recruiters = [
    { id: 101, name: 'Mizo' },
    { id: 102, name: 'Mayank' },
    { id: 103, name: 'Mili' },
    { id: 104, name: 'Amex' },
  ];

  getRecruiterByName(name: string) {
    return this.recruiters.filter(
      (r) => r.name.toLowerCase() == name.toLowerCase()
    );
  }

  constructor() {}
}
