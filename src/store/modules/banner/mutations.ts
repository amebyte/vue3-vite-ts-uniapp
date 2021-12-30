import { MutationTree } from 'vuex'
import { BannerState } from './state'
import { BannerMutationTypes } from './mutation-types'

export type Mutations<S = BannerState<any>> = {
  [BannerMutationTypes.SET_INDEX_BANNER](state: S, value: any): void
  [BannerMutationTypes.SET_SECKILL_BANNER](state: S, value: any): void
  [BannerMutationTypes.SET_GROUP_BANNER](state: S, value: any): void
  [BannerMutationTypes.SET_FULL_MINUSS_BANNER](state: S, value: any): void
  [BannerMutationTypes.SET_NEWS_GOODS_BANNER](state: S, value: any): void
  [BannerMutationTypes.SET_SPECIAL_PRICE_BANNER](state: S, value: any): void
  [BannerMutationTypes.SET_RANK_BANNER](state: S, value: any): void
  [BannerMutationTypes.SET_INTEGRAL_BANNER](state: S, value: any): void
  [BannerMutationTypes.SET_IS_LOADED](state: S, value: boolean): void
}
export const mutations: MutationTree<BannerState<any>> & Mutations = {
  [BannerMutationTypes.SET_INDEX_BANNER](state: BannerState<any>, value: any) {
    state.indexBanner.push(value)
  },
  [BannerMutationTypes.SET_SECKILL_BANNER](state: BannerState<any>, value: any) {
    state.seckillBanner.push(value)
  },
  [BannerMutationTypes.SET_GROUP_BANNER](state: BannerState<any>, value: any) {
    state.groupBanner.push(value)
  },
  [BannerMutationTypes.SET_FULL_MINUSS_BANNER](state: BannerState<any>, value: any) {
    state.fullMinussBanner.push(value)
  },
  [BannerMutationTypes.SET_NEWS_GOODS_BANNER](state: BannerState<any>, value: any) {
    state.newsGoodsBanner.push(value)
  },
  [BannerMutationTypes.SET_SPECIAL_PRICE_BANNER](state: BannerState<any>, value: any) {
    state.specialPriceBanner.push(value)
  },
  [BannerMutationTypes.SET_RANK_BANNER](state: BannerState<any>, value: any) {
    state.rankBanner.push(value)
  },
  [BannerMutationTypes.SET_INTEGRAL_BANNER](state: BannerState<any>, value: any) {
    state.integralBanner.push(value)
  },
  [BannerMutationTypes.SET_IS_LOADED](state: BannerState<any>, value: boolean) {
    state.isLoaded = value
  },
}
