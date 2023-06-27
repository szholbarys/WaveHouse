import { Component } from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:Product[] = products;
  ngOnInit(): void {
    console.log(products);   
  }
}

