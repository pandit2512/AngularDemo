import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';

@Component({
  selector: 'app-root',
  imports: [
    CategoryComponent,
    ProductComponent,
    DataBindingComponent,
    PipeExamplesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
