import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ParentComponent,
    RecruiterComponent,
    ProfileComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'third-app';
}
