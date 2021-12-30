import { MutationTree } from 'vuex'
import { BannerState, imgUrlsType } from './state'
import { BannerMutationTypes } from './mutation-types'

export type Mutations<S = BannerState<imgUrlsType>> = {
  [BannerMutationTypes.SET_INDEX_BANNER](state: S, value: imgUrlsType): void
  [BannerMutationTypes.SET_SECKILL_BANNER](state: S, value: imgUrlsType): void
  [BannerMutationTypes.SET_GROUP_BANNER](state: S, value: imgUrlsType): void
  [BannerMutationTypes.SET_FULL_MINUSS_BANNER](state: S, value: imgUrlsType): void
  [BannerMutationTypes.SET_NEWS_GOODS_BANNER](state: S, value: imgUrlsType): void
  [BannerMutationTypes.SET_SPECIAL_PRICE_BANNER](state: S, value: imgUrlsType): void
  [BannerMutationTypes.SET_RANK_BANNER](state: S, value: imgUrlsType): void
  [BannerMutationTypes.SET_INTEGRAL_BANNER](state: S, value: imgUrlsType): void
  [BannerMutationTypes.SET_IS_LOADED](state: S, value: boolean): void
}
export const mutations: MutationTree<BannerState<imgUrlsType>> & Mutations = {
  [BannerMutationTypes.SET_INDEX_BANNER](state: BannerState<imgUrlsType>, value: imgUrlsType) {
    state.indexBanner.push(value)
  },
  [BannerMutationTypes.SET_SECKILL_BANNER](state: BannerState<imgUrlsType>, value: imgUrlsType) {
    state.seckillBanner.push(value)
  },
  [BannerMutationTypes.SET_GROUP_BANNER](state: BannerState<imgUrlsType>, value: imgUrlsType) {
    state.groupBanner.push(value)
  },
  [BannerMutationTypes.SET_FULL_MINUSS_BANNER](state: BannerState<imgUrlsType>, value: imgUrlsType) {
    state.fullMinussBanner.push(value)
  },
  [BannerMutationTypes.SET_NEWS_GOODS_BANNER](state: BannerState<imgUrlsType>, value: imgUrlsType) {
    state.newsGoodsBanner.push(value)
  },
  [BannerMutationTypes.SET_SPECIAL_PRICE_BANNER](state: BannerState<imgUrlsType>, value: imgUrlsType) {
    state.specialPriceBanner.push(value)
  },
  [BannerMutationTypes.SET_RANK_BANNER](state: BannerState<imgUrlsType>, value: imgUrlsType) {
    state.rankBanner.push(value)
  },
  [BannerMutationTypes.SET_INTEGRAL_BANNER](state: BannerState<imgUrlsType>, value: imgUrlsType) {
    state.integralBanner.push(value)
  },
  [BannerMutationTypes.SET_IS_LOADED](state: BannerState<imgUrlsType>, value: boolean) {
    state.isLoaded = value
  },
}
