import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-touch-view',
  templateUrl: './touch-view.component.html',
  styleUrls: ['./touch-view.component.css']
})
export class TouchViewComponent implements OnInit {

  isDisplay = false;
  toggleDisplay(){
    this.isDisplay = !this.isDisplay;
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log(this.productService.getProducts())
  }

}
