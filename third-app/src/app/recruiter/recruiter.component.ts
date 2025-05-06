import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recruiter',
  imports: [CommonModule],
  templateUrl: './recruiter.component.html',
  styleUrl: './recruiter.component.css',
})
export class RecruiterComponent {
  recruiterData: any[] = [];

  inputData: string = '';
  @ViewChild('recruiterInput') recruiter!: ElementRef;

  constructor(private dataService: DataService) {
    // this.recruiterData = dataService.recruiters;
    this.recruiterData = dataService.getRecruiterByName('mizo');
  }

  getDataFromInputBox() {
    this.inputData = this.recruiter.nativeElement.value;
    // console.log(this.recruiter.nativeElement.value);
    this.recruiterData = this.dataService.getRecruiterByName(
      this.recruiter.nativeElement.value
    );
  }
}
