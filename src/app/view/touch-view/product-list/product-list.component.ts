import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 totalCount : 100;
 itemsPerPage: 5;
 p = 1;

  products: Product[] = [
    new Product(1, 'Rotje Deluxe Test', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Atoombom', 5, 50, 'https://i.imgur.com/Itv2NIbl.jpg'),
    new Product(1, 'Rotje', 5, 50, 'https://www.allesinalphen.nl/upload/644/64374/nitraat%20vlinder.v3.jpg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),




  ];

  constructor() { }

  ngOnInit(): void {
  }

}
