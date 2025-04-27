import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial',
})
export class FactorialPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    let factorial = 1;
    for (let i = 1; i <= value; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
