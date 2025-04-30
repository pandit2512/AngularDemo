import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  imports: [],
  templateUrl: './switch-example.component.html',
  styleUrl: './switch-example.component.css',
})
export class SwitchExampleComponent {
  requestStatus = 'Pending';

  changeStatus(status: string) {
    this.requestStatus = status;
  }
}
