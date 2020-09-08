import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})  
export class ProductListComponent implements OnInit {


productList: Product[] = [];

@Input() productItem: Product

  constructor(private productService: ProductService, private msg: MessengerService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
  } 

  onAddToCheckoutList(product){
    this.msg.sendMsg(product)
  }

}
