import { prefix, get } from '../requestDecorator'
import products from '../mockdb/product'
@prefix('/product')
export default class Product {
  @get('/recommend')
  async recommend() {
    return products
  }
}
