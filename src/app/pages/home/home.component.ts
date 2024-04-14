import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ICategory, IProduct } from '../../../interfaces/product.interface';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/layouts/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public router: Router = inject(Router);
  public allProducts: IProduct[] = [];
  public allCategories: ICategory[] = [];

  constructor(
    private _productService: ProductService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.allProducts = await this._productService.getProducts() || [];
      this.allCategories = await this._productService.getCategories() || [];
    } catch (error) {
      console.error(error)
    }
  }

}
