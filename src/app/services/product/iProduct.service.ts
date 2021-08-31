import { Injectable } from '@angular/core';
import { IProductService } from './product.service';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements IProductService {
  products: Product[];
  fileName: string = 'app/data/product.json';

  constructor(public http: HttpClient) {}

  GetAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.fileName);
  }

  GetById(id: number): Observable<Product> {
    return this.http.get<Product[]>(this.fileName).pipe(
      map((products) => {
        return products.find((product) => product.productId === id);
      })
    );
  }
}
