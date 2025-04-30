import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SwitchExampleComponent } from '../switch-example/switch-example.component';

@Component({
  selector: 'app-directive-example',
  imports: [CommonModule, SwitchExampleComponent],
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.css',
})
export class DirectiveExampleComponent {
  status: boolean = false;
  loggedIn: boolean = false;

  show: boolean = true;

  data = ['A', 'B', 'C'];

  student = [
    { studentId: 101, studentName: 'Amex' },
    { studentId: 102, studentName: 'Punkk' },
  ];

  colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];

  login() {
    this.loggedIn = !this.loggedIn;
  }

  display() {
    this.show = !this.show;
  }
}
