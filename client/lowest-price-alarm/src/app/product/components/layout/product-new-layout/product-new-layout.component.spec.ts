import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewLayoutComponent } from './product-new-layout.component';

describe('ProductNewLayoutComponent', () => {
  let component: ProductNewLayoutComponent;
  let fixture: ComponentFixture<ProductNewLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNewLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNewLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
