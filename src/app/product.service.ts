import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

i: number =1
  private products :Product[]=[
    {id:this.i++,name:"product 1",price:34,category:"category 1",stock:0},
    {id:this.i++,name:"product 2",price:56,category:"category 2",stock:66},
    {id:this.i++,name:"product 3",price:89,category:"category 3",stock:222},
    {id:this.i++,name:"product 4",price:23,category:"category 4",stock:99},
    {id:this.i++,name:"product 5",price:98,category:"category 5",stock:55},

  ]

  constructor() { }
 getProduct():Product[]{
    return this.products;
  }
}
