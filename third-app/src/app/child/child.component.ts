import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() data = 'XYZ';

  constructor() {
    console.log('Constructor', this.data);
  }

  //LifeCycle Hooks
  ngOnInit() {
    console.log('ngOnInit', this.data);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('child component destroyed');
  }
}
