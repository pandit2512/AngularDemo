import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  imports: [CommonModule],
  templateUrl: './switch-example.component.html',
  styleUrl: './switch-example.component.css',
})
export class SwitchExampleComponent {
  @Input() requestStatus = 'Pending';

  changeStatus(status: string) {
    this.requestStatus = status;
  }
}
