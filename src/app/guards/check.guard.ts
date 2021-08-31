import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, from } from 'rxjs';
import { ProductService } from '../services/product/iProduct.service';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CheckGuard implements CanActivate {
  product: Product;

  constructor(public productService: ProductService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let productId = +route.params['id'];
    return this.productService.GetById(productId).pipe(
      map((product) => {
        if (product) {
          return true;
        } else {
          window.alert('404 page not found');
          return false;
        }
      })
    );
  }
}
