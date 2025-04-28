import { Component } from '@angular/core';
import { ChildComponent, Student } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  parentData: any = { message: 'Data sent from parent', status: 'OK' };

  //====================
  receivedStudent: Student = { id: 0, name: '' };

  getStudent(data: Student) {
    this.receivedStudent = data;
  }
  //========================
  receivedDataFromChild(data: string) {
    alert(data);
  }
  // ================
  receivedArray(data: any[]) {
    console.log('Received Array from child : ', data);
  }
}
