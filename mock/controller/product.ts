import { prefix, get } from '../requestDecorator'
import products from '../mockdb/product'
import { detail } from '../mockdb/product'
@prefix('/product')
export default class Product {
  @get('/recommend')
  async recommend() {
    return products
  }
  @get('/detail')
  async detail() {
      return detail
  }
}
