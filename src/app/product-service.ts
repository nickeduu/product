import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
  })
export class ProductService {

  apiUrl = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  save(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }

}
