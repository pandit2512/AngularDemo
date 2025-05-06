import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
@Component({
  selector: 'app-root',
  imports: [
    UserComponent,
    ProductComponent,
    HomeComponent,
    NavbarComponent,
    OrderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  age: number = 24;
}
