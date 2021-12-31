import request from '@/utils/request'

/**
 * 新人专享商品分页查询
 *
 */
export function fetchNewUserOnlyGoodsList(data) {
  return request?.get?.('/newcomers/products', data, { noAuth: true })
}
