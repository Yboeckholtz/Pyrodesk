import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})  
export class ProductListComponent implements OnInit {
//  totalCount : 100;
//  itemsPerPage: 5;
//  p = 1;
productList: Product[] = [];

@Input() productItem: Product

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
  }

}
