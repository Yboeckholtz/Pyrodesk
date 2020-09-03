import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-keyboard-view',
  templateUrl: './keyboard-view.component.html',
  styleUrls: ['./keyboard-view.component.css']
})
export class KeyboardViewComponent implements OnInit {
    products: Product[] = [
      new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
      new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
      new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
      new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
      new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
      new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg')
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
