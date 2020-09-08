import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Rotje', 5, 50, 'https://picsum.photos/200'),
    new Product(2, 'Rotje', 5, 20, 'https://picsum.photos/200'),
    new Product(3, 'Rotje', 5, 10, 'https://picsum.photos/200'),
    new Product(4, 'Rotje', 5, 4, 'https://picsum.photos/200'),
    new Product(5, 'Rotje', 5, 2, 'https://picsum.photos/200'),
    new Product(6, 'Rotje', 5, 432, 'https://picsum.photos/200'),
    new Product(7, 'Rotje', 5, 234, 'https://picsum.photos/200'),
    new Product(8, 'Rotje', 5, 36, 'https://picsum.photos/200'),
    new Product(9, 'Rotje', 5, 85, 'https://picsum.photos/200'),
    new Product(10, 'Rotje', 5, 56, 'https://picsum.photos/200'),
    new Product(11, 'Rotje', 5, 56, 'https://picsum.photos/200'),
    new Product(12, 'Rotje', 5, 876, 'https://picsum.photos/200'),
    new Product(13, 'Rotje', 5, 976, 'https://picsum.photos/200'),
    new Product(14, 'Rotje', 5, 520, 'https://picsum.photos/200'),
    new Product(15, 'Rotje', 5, 234, 'https://picsum.photos/200'),
    new Product(16, 'Rotje', 5, 123, 'https://picsum.photos/200'),
    new Product(17, 'Rotje', 5, 123, 'https://picsum.photos/200'),
    new Product(18, 'Rotje', 5, 345, 'https://picsum.photos/200'),
    new Product(19, 'Rotje', 5, 345, 'https://picsum.photos/200'),
    new Product(20, 'Rotje', 5, 3, 'https://picsum.photos/200'),
    new Product(21, 'Rotje', 5, 5, 'https://picsum.photos/200'),
    new Product(22, 'Rotje', 5, 23, 'https://picsum.photos/200'),
    new Product(23, 'Rotje', 5, 42, 'https://picsum.photos/200'),
    new Product(24, 'Rotje', 5, 3, 'https://picsum.photos/200'),
    new Product(25, 'Rotje', 5, 1, 'https://picsum.photos/200'),
  ]
  

  constructor() { }

  getProducts(): Product[] {
    //TODO: populate products from the API and return to observable
    return this.products
  }
}
