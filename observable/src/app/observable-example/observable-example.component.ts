import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, of, take } from 'rxjs';

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

    //====================================
    //after 3 sec it will stop
    //complete takes 2 args. function,time
    setTimeout(() => {
      observer.complete();
    }, 3500);
    //================================

    setTimeout(() => {
      observer.error(new Error('Something went Wrong'));
    }, 2500);

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

      error: (error) => {
        console.log(error.message);
        alert(error.message);
      },
    });
  }

  //2.=========Operator=======
  observable2 = of([2, 4, 8], ['A', 'B']);

  getData2() {
    this.observable2.subscribe({
      next: (value) => {
        this.data.push(value);
      },
      complete: () => {
        console.log('Data Fetched Successfully');
      },
    });
  }
  //3.===========================
  getData3() {
    from('Amit').subscribe({
      next: (value) => {
        this.data.push(value);
      },
      complete: () => {
        alert('Data fetched successfully');
      },
    });
  }

  //4.===========

  observable4 = interval(2000);
  obs_subscription: any;
  getData4() {
    this.obs_subscription = this.observable4.subscribe({
      next: (value) => {
        this.data.push(value);
      },
    });
  }

  stop() {
    this.obs_subscription.unsubscribe();
    // this.getData3();
  }

  //5.pipe()===============

  getData5() {
    interval(1000)
      .pipe(take(5))
      .subscribe({
        next: (value) => {
          this.data.push(value);
        },
      });
  }

  getData6() {
    interval(1000)
      .pipe(
        map((value) => {
          return value + 10;
        }),
        take(5)
      )
      .subscribe({
        next: (value) => {
          this.data.push(value);
        },
      });
  }
  //7.=============
  //Print Only Students Name
  getData7() {
    let students = [
      { id: 101, name: 'Amex' },
      { id: 102, name: 'Aman' },
    ];

    from(students)
      .pipe(map((student) => student.name))
      .subscribe({
        next: (value) => {
          this.data.push(value);
        },
      });
  }

  //8.=========
  // print square of even numbers
  getData8() {
    of(11, 22, 33, 44, 55, 66)
      .pipe(
        filter((value) => value % 2 === 0),
        map((e) => e * e)
      )
      .subscribe({
        next: (value) => {
          this.data.push(value);
          console.log(value);
        },
      });
  }
}
