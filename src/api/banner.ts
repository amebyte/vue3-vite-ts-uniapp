import request from '@/utils/request'

/**
 *  获取轮播图
 *
 */
export function fetchBannerList(data) {
  return request?.get?.('/banner/getBanner', data, {
    noAuth: true,
  })
}
