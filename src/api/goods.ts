import request from '@/utils/request'

/**
 * 精选课程
 *
 */
export function fetchRecommendGoodsList(data) {
  return request?.get?.('/product/recommend', data, { noAuth: true })
}
