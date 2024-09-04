import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    if(!searchTerm || !products){
      return products
    }
    return products.filter( product => product.name.toLowerCase().includes(searchTerm.toLowerCase())||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()))

  }

}
