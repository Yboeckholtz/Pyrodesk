import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model';

@Pipe({
  name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[]{
    if(!products || !searchTerm ){
      return products;
    }

    return products.filter(product =>
       product.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1)
  }

}
