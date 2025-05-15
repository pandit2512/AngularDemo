import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWishlistComponent } from './category-wishlist.component';

describe('CategoryWishlistComponent', () => {
  let component: CategoryWishlistComponent;
  let fixture: ComponentFixture<CategoryWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryWishlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
