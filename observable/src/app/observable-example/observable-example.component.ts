import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  //import common module
  imports: [CommonModule],
  templateUrl: './observable-example.component.html',
  styleUrl: './observable-example.component.css',
})
export class ObservableExampleComponent {
  data: any[] = [];

  observable1 = new Observable((observer) => {
    setTimeout(() => {
      observer.next(20);
    }, 2000);
    setTimeout(() => {
      observer.next(10);
    }, 1000);
    setTimeout(() => {
      observer.next(40);
    }, 3000);

    //after 3 sec it will stop
    //complete takes 2 args. function,time
    setTimeout(() => {
      observer.complete();
    }, 3000);

    setTimeout(() => {
      observer.next(50);
    }, 4000);

    // observer.next(45);
    // observer.next(50);
    // observer.next(75);
    // observer.next(100);
  });

  getData1() {
    this.observable1.subscribe({
      next: (value) => {
        console.log('value', value);
        this.data.push(value);
      },
      complete: () => {
        alert('Data fetched successfully');
      },
    });
  }
}
