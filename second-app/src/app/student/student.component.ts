import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  @Input() studentId: number = 0;
  @Input() studentName: string = '';
  @Input() studentMarks: number = 0;
}
