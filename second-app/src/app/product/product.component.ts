import { Component } from '@angular/core';

@Component({
  selector: 'product',
  template: '<h4>Product Component Rendered</h4>',
  // we are writting template instead of templateUrl to directly
  //write html
  styles: 'h4{color:red}',
})
export class ProductComponent {}
