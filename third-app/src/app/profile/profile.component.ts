import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [UserService],
})
export class ProfileComponent {
  userservice: UserService = inject(UserService);

  ngOnInit() {
    console.log(this.userservice.getUserData);
  }
}
