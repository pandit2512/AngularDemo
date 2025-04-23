import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categoryId: number = 101;
  categoryName: String = 'Home Appliances';
}
