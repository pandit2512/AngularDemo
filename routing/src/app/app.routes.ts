import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryWishlistComponent } from './category-wishlist/category-wishlist.component';
import { authChildGuard } from './auth-child.guard';
import { authDeactivateGuard } from './auth-deactivate.guard';
import { canMatchGuard } from './can-match.guard';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'profile',
    canActivate: [authGuard],
    canDeactivate: [authDeactivateGuard],
  },
  { path: '', component: HomeComponent, title: 'home' },
  {
    path: 'dash',
    component: DashboardComponent,
    title: 'dashboard',
    canMatch: [canMatchGuard],
  },
  { path: 'product/:id', component: ProductComponent, title: 'product' },
  { path: 'orders', component: OrdersComponent, title: 'orders' },

  {
    path: 'category',
    component: CategoryComponent,
    canActivateChild: [authChildGuard],
    children: [
      {
        path: 'details/:id',
        component: CategoryDetailComponent,
      },
      {
        path: 'wishlist',
        component: CategoryWishlistComponent,
      },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];
