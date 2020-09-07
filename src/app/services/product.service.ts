import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
    new Product(1, 'Rotje', 5, 50, 'https://f.jwwb.nl/public/t/r/m/temp-saanvnuhjwtbpnttdyvs/g8zzbw/CF736AB9-18CC-47F7-9A0D-0BF3A4A9E1E3.jpeg'),
  ]
  

  constructor() { }

  getProducts(): Product[] {
    //TODO: populate products from the API and return to observable
    return this.products
  }
}
