import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanExit } from '../auth-deactivate.guard';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements CanExit {
  data: any;

  isSaved: boolean = false;

  constructor(private activateroute: ActivatedRoute) {}

  toggleSave() {
    this.isSaved = !this.isSaved;
  }

  // Override
  canDeactivate(): boolean {
    return this.isSaved;
  }

  ngOnInit() {
    this.activateroute.queryParams.subscribe({
      next: (queryPara) => {
        console.log('Profile', queryPara);
        this.data = queryPara['name'];
      },
    });
  }
}
