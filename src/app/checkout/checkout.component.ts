import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() checkoutItem: any

  checkoutItems = [
    // {name: "Test1", amount: 4, price: 100  },
    // {name: "test2", amount: 2, price: 20  },
    // {name: "test3", amount: 6, price: 50  },
    // {name: "test4", amount: 1, price: 8  },
  ];

  checkoutTotal = 0;

  constructor(productservice: ProductService, private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {
     this.addProductToCheckoutList(product)
    })
  }

  addProductToCheckoutList(product: Product){

  let productExists = false;

  for(let i in this.checkoutItems){
     if(this.checkoutItems[i].id == product.id){
        this.checkoutItems[i].quantity++
        productExists = true
        break;
    }
  }
  
  if(!productExists){
    this.checkoutItems.push({
       id: product.id,
       name: product.name,
       quantity: 1,
       price: product.price
    })
  }

      this.checkoutTotal = 0 
      this.checkoutItems.forEach(item => {
        this.checkoutTotal += (item.quantity * item.price)
      })
  }
}
