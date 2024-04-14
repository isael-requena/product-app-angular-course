import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../interfaces/product.interface';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [LazyLoadImageModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  /**
   * The product to render
   */
  @Input() product: IProduct = {
    id: 0,
    title: '',
    description: '',
    images: [],
    price: 0,
    category: {
      id: 0,
      name: '',
      image: '',
    }
  }

  constructor() {}
}
