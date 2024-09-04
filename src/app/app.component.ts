import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tp02';
  products: Product[]=[]
  searchTerm: string=''
  productForm : FormGroup
  editP:boolean=false
  constructor(private productService : ProductService, private fb : FormBuilder){
    this.productForm=this.fb.group({
      id:[null, Validators.required],
      name:['',Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      stock: [null, [Validators.required, Validators.min(0)]]
    
    })
  }
  
  ngOnInit(){
    this.products=this.productService.getProduct()
  }

  addproduct(){
    if (this.productForm.valid){
      const newProduct : Product = this.productForm.value
      this.products.push(newProduct)
      this.productForm.reset()
    }
  }
  edit(p:Product){
    this.editP=true
    console.log(this.editP)
     this.productForm=this.fb.group({
      id:[p.id, Validators.required],
      name:[p.name,Validators.required],
      price: [p.price, [Validators.required, Validators.min(0)]],
      category: [p.category, Validators.required],
      stock: [p.stock, [Validators.required, Validators.min(0)]]
    
     })
   }
update(){
  if (this.productForm.valid){
    const newProduct : Product = this.productForm.value
    this.products.filter(product=>{
      if(product.id==newProduct.id){
        product.stock=newProduct.stock
        product.category=newProduct.category
        product.name=newProduct.name
      }
    })
    //this.products.push(newProduct)
    this.productForm.reset()
  }

}
delete(p:Product){
  const index = this.products.indexOf(p)
  if(index != -1){
    this.products.splice(index,1);
  }
  
}
}
