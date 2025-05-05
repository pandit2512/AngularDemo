import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  parentData = 'Parents Initial Data';

  count = 0;

  changeParentData(temp: string) {
    this.parentData = temp;
  }

  increment() {
    this.count++;
  }
}
