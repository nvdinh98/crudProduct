import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/product/showAll');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:8080/product/create', product);

  }

  findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/product/${id}`);
  }

  // @ts-ignore
  deleteProduct(id: number): Observable<Product> {
   return  this.http.delete(`http://localhost:8080/product/delete/${id}`);
  }

  updateById(product, id): Observable<Product> {
  return  this.http.put<Product>(`http://localhost:8080/product/edit/${id}`, product);
  }
}
