import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProductFilterPipe } from 'src/app/product-filter.pipe';
@Component({
  selector: 'app-keyboard-view',
  templateUrl: './keyboard-view.component.html',
  styleUrls: ['./keyboard-view.component.css']
})
export class KeyboardViewComponent implements OnInit {

  productList: Product[] = [];
  searchTerm: string;

  constructor(private productService: ProductService, private msg: MessengerService, private productFilter: ProductFilterPipe) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
  }

  onAddToCheckoutList(product){
    this.msg.sendMsg(product)
  }
}
