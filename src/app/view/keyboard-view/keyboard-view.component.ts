import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-keyboard-view',
  templateUrl: './keyboard-view.component.html',
  styleUrls: ['./keyboard-view.component.css']
})
export class KeyboardViewComponent implements OnInit {

  productList: Product[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts()
  }

}
