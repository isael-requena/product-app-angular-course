import { Injectable } from '@angular/core';
import axios from 'axios';
import { ICategory, IProduct } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  /**
   * Function to make query and ask for the product list
   * @returns Product list
   */
  public getProducts = async (): Promise<IProduct[] | null> => {
    try {
      const result = await axios.get<IProduct[]>('https://api.escuelajs.co/api/v1/products')
      return result.data
    } catch (error) {
      console.error(error);
      return null
    }
  }

  public getCategories = async (): Promise<ICategory[] | null> => {
    try {
      const result = await axios.get<ICategory[]>('https://api.escuelajs.co/api/v1/categories');
      return result.data
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
