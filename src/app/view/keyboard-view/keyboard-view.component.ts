import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-keyboard-view',
  templateUrl: './keyboard-view.component.html',
  styleUrls: ['./keyboard-view.component.css']
})
export class KeyboardViewComponent implements OnInit {

  productList: Product[] = [];


  constructor(private productService: ProductService, private msg: MessengerService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
  }
  
  onAddToCheckoutList(product){
    this.msg.sendMsg(product)
  }
}
