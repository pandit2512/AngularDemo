import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productId: any;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activateRoute.params.subscribe({
      next: (param) => {
        this.productId = param['id'];
        console.log('parameter: ', param['id']);
      },
    });
  }
}
