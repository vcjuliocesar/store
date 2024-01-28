import { Component, EventEmitter, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ProductComponent } from '@product/components/product/product.component'
import { HeaderComponent } from '@shared/componets/header/header.component'
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  cart = signal<Product[]>([])
  private cartService = inject(CartService)
  private productService = inject(ProductService)

  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next:(products) => {
        this.products.set(products)
      },
      error:()=>{

      }
    })
  }

  // constructor(){
  //   const initProducts:Product[] = [
  //     {
  //       id:Date.now(),
  //       title:'Product 1',
  //       price:100,
  //       image:'https://picsum.photos/640/640?r=19',
  //       createdAt:new Date().toISOString()
  //     },
  //     {
  //       id:Date.now(),
  //       title:'Product 2',
  //       price:100,
  //       image:'https://picsum.photos/640/640?r=20',
  //       createdAt:new Date().toISOString()
  //     },
  //     {
  //       id:Date.now(),
  //       title:'Product 3',
  //       price:100,
  //       image:'https://picsum.photos/640/640?r=19',
  //       createdAt:new Date().toISOString()
  //     },
  //     {
  //       id:Date.now(),
  //       title:'Product 4',
  //       price:100,
  //       image:'https://picsum.photos/640/640?r=20',
  //       createdAt:new Date().toISOString()
  //     }
  //   ]

  //   this.products.set(initProducts)
  // }

  addToCart(product:Product) {
    console.log('estamos en el padre');
    console.log(product);
    this.cartService.addToCart(product)
    //this.cart.update(prevState => [...prevState,product])
  }
}
