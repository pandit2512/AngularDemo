import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  marks?: number;
}

//==============
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() receivedData: any;

  @Output() childData: any = new EventEmitter<string>();

  sendMessage() {
    this.childData.emit('Data sent from child');
  }
  // ============
  arr: any[] = [2, 3, 'A', 'B', 5, 7, 6];

  @Output() arrayEmitter = new EventEmitter<any[]>();
  sendArray() {
    this.arrayEmitter.emit(this.arr);
  }
  //=========================
  @Output() student = new EventEmitter<Student>();

  sendStudent() {
    this.student.emit({ id: 101, name: 'Punkk' });
  }
}
