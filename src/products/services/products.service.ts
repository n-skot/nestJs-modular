import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private _products: ProductEntity[];

  constructor() {
    this._products = [
      {
        id: 1,
        name: 'Product 1',
        price: 19.99,
        stock: 100,
        description: 'Lorem ipsum dolor sit amet',
        category: 'Electronics',
        imageUrl: 'https://example.com/product1.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 29.99,
        stock: 50,
        description: 'Lorem ipsum dolor sit amet',
        category: 'Clothing',
        imageUrl: 'https://example.com/product2.jpg',
      },
    ];
  }

  getAll() {
    return this._products;
  }

  getById(id: number) {
    return this._products.find((product) => product.id === id);
  }

  create(product: ProductEntity) {
    this._products.push(product);
    return product;
  }

  update(id: number, updatedProduct: ProductEntity) {
    const productIndex = this._products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex !== -1) {
      this._products[productIndex] = {
        ...this._products[productIndex],
        id,
        ...updatedProduct,
      };
      return this._products[productIndex];
    }
    return null;
  }

  delete(id: number) {
    const productIndex = this._products.findIndex(
      (product) => product.id === id,
    );
    if (productIndex !== -1) {
      this._products.splice(productIndex, 1);
      return true;
    }
    return false;
  }
}
