import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() data = 'XYZ';

  inputData: string = '';

  @ViewChild('para') paragraph!: ElementRef;

  @ViewChild('boxData') box!: ElementRef;

  constructor() {
    console.log('Constructor', this.data);
    console.log('Constructor', this.paragraph);
  }

  //LifeCycle Hooks
  ngOnInit() {
    console.log('ngOnInit', this.data);
    console.log('ngOnInit', this.paragraph);
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

  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.paragraph);
  }

  getElementRef() {
    let para = this.paragraph.nativeElement;
    console.log('Element Reference', para);
    para.setAttribute('class', 'bg-warning');
  }

  getDataFromBox() {
    this.inputData = this.box.nativeElement.value;
    console.log('input box Data: ', this.inputData);
    // this.paragraph.setAttribute("class","")
  }
}
