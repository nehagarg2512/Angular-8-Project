import { Injectable } from '@angular/core';
import {
  Resolve,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRoute,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product/iProduct.service';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<Product> {
  product: Product;
  constructor(public productService: ProductService, public router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Promise<Product> | Product {
    let productId = +route.params['id'];
    return this.productService.GetById(productId).pipe(
      map((product) => {
        if (product) {
          return product;
        }
      })
    );
  }
}
