import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userId: number = 1001;
  userName: String = 'Mili';
  userEmail: String = 'mili@gmail.com';
}
