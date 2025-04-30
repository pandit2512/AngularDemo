import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@Component({
  selector: 'app-root',
  imports: [
    CategoryComponent,
    ProductComponent,
    DataBindingComponent,
    PipeExamplesComponent,
    StudentComponent,
    ParentComponent,
    DirectiveExampleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
