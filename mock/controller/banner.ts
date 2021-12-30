import { prefix, get } from '../requestDecorator'
import bannerList from '../mockdb/bannerList'
@prefix('/banner')
export default class User {
  @get('/getBanner')
  async getBanner() {
    return bannerList
  }
}
