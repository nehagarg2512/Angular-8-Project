import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/iProduct.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product;
  productId: number;
  constructor(
    public route: ActivatedRoute,
    public productService: ProductService
  ) {}
  ngOnInit() {
    this.productId = +this.route.snapshot.params['id'];
    // return this.productService.GetById(this.productId).subscribe(data => this.product = data);
    this.product = this.route.snapshot.data['data'];
  }
}
