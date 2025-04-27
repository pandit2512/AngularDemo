import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GreetingPipe } from '../pipes/greeting.pipe';
import { FactorialPipe } from '../pipes/factorial.pipe';
import { SlicePipe } from '../pipes/slice.pipe';

@Component({
  selector: 'app-pipe-examples',
  imports: [CommonModule, GreetingPipe, FactorialPipe, SlicePipe],
  templateUrl: './pipe-examples.component.html',
  styleUrl: './pipe-examples.component.css',
})
export class PipeExamplesComponent {
  currentDate = new Date();
}
