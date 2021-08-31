import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/iProduct.service';
import { strict } from 'assert';
import { stringify } from 'querystring';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  searchedProduct: Product[];
  btntxt: string = 'Show Images';
  showImg: boolean = true;
  searchedText: string;
  filteredProducts: Product[];

  set searchText(v: string) {
    if (v) {
      this.searchedText = v;
      this.search();
      return;
    }
    this.filteredProducts = this.products;
  }

  get searchText(): string {
    return this.searchedText;
  }

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.GetAll().subscribe((data) => {
      debugger;
      this.products = data;
      this.filteredProducts = this.products;
    });
  }

  onClick() {
    this.showImg = !this.showImg;
    if (this.showImg) {
      this.btntxt = 'Hide';
      return;
    }
    this.btntxt = 'Show';
  }

  searchClick() {
    return (this.filteredProducts = this.products.filter(
      (product) =>
        product.productName
          .toLowerCase()
          .indexOf(this.searchedText.toLowerCase()) != -1
    ));
  }

  search() {
    return (this.filteredProducts = this.products.filter((product) => {
      return (
        product.productName
          .toLowerCase()
          .indexOf(this.searchText.toLowerCase()) != -1
      );
    }));
  }

  dynVal: string;
  onClicked(value) {
    this.dynVal = value;
    console.log(value);
  }

  childData: String;

  parentMethod(data: String) {
    this.childData = data;
  }
}
