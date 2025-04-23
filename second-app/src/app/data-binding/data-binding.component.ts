import { Component } from '@angular/core';

@Component({
  selector: 'data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  userName: string = 'Amex';
  textcolors: string = 'blue';
  borderradius: number = 10;
  isError: boolean = false;
  border: string = '2px solid red';
  isBorderChanged: boolean = false;

  showAlert() {
    alert('event Data Binding');
  }

  changeBorder() {
    this.border = '5px dotted black';
  }

  toggleBorder() {
    if (this.isBorderChanged) {
      this.border = '2px solid green'; // Revert to original border
    } else {
      this.border = '5px dotted black'; // Change to new border
    }
    this.isBorderChanged = !this.isBorderChanged; // Toggle the state
  }
}
