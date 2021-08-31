import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

export interface IProductService {
  GetAll(): Observable<Product[]>;
  GetById(id: number): Observable<Product>;
}
