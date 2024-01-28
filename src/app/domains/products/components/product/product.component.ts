import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { CommonModule} from '@angular/common'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,ReversePipe,TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!:Product
  // @Input({required:true}) img:string = '';
  // @Input({required:true}) price:number = 0;
  // @Input({required:true}) title:string = '';

  @Output() addToCart = new EventEmitter()

  addToCartHandler(){
    console.log('click from child')
    this.addToCart.emit(this.product)
  }
}
