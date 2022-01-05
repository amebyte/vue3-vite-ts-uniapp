<template>
  <view class="container">
    <!--轮播图 start-->
    <ProductDetailSwiper :img-urls="sliderImage" :videoline="goodsInfo.videoLink" />
    <!--轮播图 end-->
    <!--商品信息 start-->
    <goodsInfo :goods-info="goodsInfo" @openShare="openShare" />
    <!--商品信息 end-->
    <!--商品详情 start-->
    <GoodsContent :goods-info="goodsInfo" />
    <!--商品详情 end-->
    <!--底部导航栏 start-->
    <DetailFooterBar />
    <!--底部导航栏 end-->
  </view>
</template>
<script lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, reactive, toRef, computed, defineComponent, toRefs } from 'vue'
import ProductDetailSwiper from '@/components/product-detail-swiper/index.vue'
import GoodsInfo from './components/GoodsInfo.vue'
import GoodsContent from './components/GoodsContent.vue'
import DetailFooterBar from './components/DetailFooterBar.vue'
import { fetchGoodsDetail } from '@/api/goods'
export default defineComponent({
  name: 'GoodsDetail',
  components: {
    ProductDetailSwiper,
    GoodsInfo,
    GoodsContent,
    DetailFooterBar,
  },
  setup() {
    let state = reactive({
      goodsInfo: {} as any,
      sliderImage: [],
    })
    const getGoodsDetail = () => {
      fetchGoodsDetail({})
        .then((r) => {
          console.log('r', r)
          state.goodsInfo = r.data.data
          state.sliderImage = state.goodsInfo.sliderImage
          state.goodsInfo.content = state.goodsInfo.content.replace(
            /<img/gi,
            "<img class='richImg' style='width:auto!important;height:auto!important;max-height:100%;width:100%;'"
          )
          state.goodsInfo.content = state.goodsInfo.content.replace(/&nbsp;/g, '&ensp;')
        })
        .catch((err) => console.log('err', err))
    }

    const openShare = () => {
      console.log('openShare')
    }
    onShow(() => {
      getGoodsDetail()
    })
    return {
      ...toRefs(state),
      openShare,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '@/static/css/variable.scss';
.container {
  background-color: $background-color;
}
</style>
<style lang="scss">
@import '@/static/css/variable.scss';
page {
  background-color: $background-color;
}
</style>
