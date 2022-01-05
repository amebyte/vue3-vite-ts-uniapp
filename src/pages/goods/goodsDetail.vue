<template>
  <view class="container">
    <!--轮播图 start-->
    <ProductDetailSwiper :img-urls="sliderImage" :videoline="goodsInfo.videoLink" />
    <!--轮播图 end-->
  </view>
</template>
<script lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, reactive, toRef, computed, defineComponent, toRefs } from 'vue'
import ProductDetailSwiper from '@/components/product-detail-swiper/index.vue'
import { fetchGoodsDetail } from '@/api/goods'
export default defineComponent({
  name: 'GoodsDetail',
  components: {
    ProductDetailSwiper,
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
        })
        .catch((err) => console.log('err', err))
    }
    onShow(() => {
      getGoodsDetail()
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>
<style lang="scss" scoped>
.container {
}
</style>
