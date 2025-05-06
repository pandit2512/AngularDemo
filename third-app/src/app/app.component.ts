import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { RecruiterComponent } from './recruiter/recruiter.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ParentComponent, RecruiterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'third-app';
}
