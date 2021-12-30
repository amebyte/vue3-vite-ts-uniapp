import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store'
import { fetchBannerList } from '@/api/banner'
import { BannerState, imgUrlsType } from './state'
import { Mutations } from './mutations'
import { BannerActionTypes } from './action-types'
import { BannerMutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<BannerState<imgUrlsType>, RootState>, 'commit'>

export interface Actions {
  [BannerActionTypes.ACTION_GET_BANNER]({ commit }: AugmentedActionContext, bannerAddress: number): void
}

export const actions: ActionTree<BannerState<imgUrlsType>, RootState> & Actions = {
  async [BannerActionTypes.ACTION_GET_BANNER]({ commit, state }: AugmentedActionContext, bannerAddress = 10) {
    // 只调一次，调用过了则不再调用
    if (state.isLoaded) return
    console.log('getbanner')
    await fetchBannerList({ bannerAddress }).then((res) => {
      commit(BannerMutationTypes.SET_IS_LOADED, true)
      const bannerList = res.data.map((item) => {
        let link = ''
        if (item.linkForm == 10) {
          const temp = JSON.parse(item.linkAddress)
          link = `/pages/goods/goodsDetail?productId=${temp.id}&shopId=${temp.shopId}`
        }

        return {
          bannerAddress: item.bannerAddress,
          src: item.img,
          type: item.linkForm == 20 ? 'video' : 'image',
          link: link,
        }
      })

      bannerList.forEach((item) => {
        if (item.bannerAddress == 10) {
          commit(BannerMutationTypes.SET_INDEX_BANNER, item)
        } else if (item.bannerAddress == 20) {
          commit(BannerMutationTypes.SET_SECKILL_BANNER, item)
        } else if (item.bannerAddress == 30) {
          commit(BannerMutationTypes.SET_GROUP_BANNER, item)
        } else if (item.bannerAddress == 40) {
          commit(BannerMutationTypes.SET_FULL_MINUSS_BANNER, item)
        } else if (item.bannerAddress == 50) {
          commit(BannerMutationTypes.SET_NEWS_GOODS_BANNER, item)
        } else if (item.bannerAddress == 60) {
          commit(BannerMutationTypes.SET_SPECIAL_PRICE_BANNER, item)
        } else if (item.bannerAddress == 70) {
          commit(BannerMutationTypes.SET_RANK_BANNER, item)
        } else if (item.bannerAddress == 80) {
          commit(BannerMutationTypes.SET_INTEGRAL_BANNER, item)
        }
      })
    })
  },
}
