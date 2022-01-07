<template>
  <view class="container">
    <!--轮播图 start-->
    <ProductDetailSwiper :img-urls="sliderImage" :videoline="goodsInfo.videoLink" />
    <!--轮播图 end-->
    <!--商品信息 start-->
    <goodsInfo :goods-info="goodsInfo" @openShare="openShare" />
    <!--商品信息 end-->
    <!--课程信息 start-->
    <GoodsCurriculum />
    <!--课程信息 end-->
    <!--老师信息 start-->
    <GoodsTeacher />
    <!--老师信息 end-->
    <!--商品详情 start-->
    <GoodsContent :goods-info="goodsInfo" />
    <!--商品详情 end-->
    <!--底部导航栏 start-->
    <DetailFooterBar ref="detailFooterBar" @setIsOpenAttrWindow="setIsOpenAttrWindow" />
    <!--底部导航栏 end-->
    <!--规格属性 start-->
    <AttrWindow
      id="attr-window"
      :attr="attr"
      :i-splus="1"
      :i-scart="1"
      @closeWindow="closeWindow"
      @changeCartNum="changeCartNum"
      @selectAttrVal="selectAttrVal"
      @iptCartNum="iptCartNum"
      @confirm="confirm"
    />
    <!--规格属性 end-->
  </view>
</template>
<script lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, reactive, toRef, computed, defineComponent, toRefs } from 'vue'
import ProductDetailSwiper from '@/components/product-detail-swiper/index.vue'
import AttrWindow from '@/components/attr-window/index.vue'
import GoodsInfo from './components/GoodsInfo.vue'
import GoodsContent from './components/GoodsContent.vue'
import DetailFooterBar from './components/DetailFooterBar.vue'
import GoodsCurriculum from './components/GoodsCurriculum.vue'
import GoodsTeacher from './components/GoodsTeacher.vue'
import { fetchGoodsDetail } from '@/api/goods'
export default defineComponent({
  name: 'GoodsDetail',
  components: {
    ProductDetailSwiper,
    AttrWindow,
    GoodsInfo,
    GoodsContent,
    DetailFooterBar,
    GoodsCurriculum,
    GoodsTeacher,
  },
  setup() {
    let state = reactive({
      goodsInfo: {} as any,
      sliderImage: [],
      attr: {
        isOpenAttrWindow: true, // 是否打开属性面板
        productAttr: [],
        productSelect: {},
      } as any,
      isBuyNow: false,
      cart_num: 0,
      attrValue: '',
      attrTxt: '请选择',
    })
    const getGoodsDetail = () => {
      fetchGoodsDetail({})
        .then((r) => {
          console.log('r', r)
          state.goodsInfo = r.data.data
          state.sliderImage = state.goodsInfo.sliderImage
          state.attr.productAttr = state.goodsInfo.productAttr
          state.goodsInfo.content = state.goodsInfo.content.replace(
            /<img/gi,
            "<img class='richImg' style='width:auto!important;height:auto!important;max-height:100%;width:100%;'"
          )
          state.goodsInfo.content = state.goodsInfo.content.replace(/&nbsp;/g, '&ensp;')
          setDefaultAttrSelect(state.goodsInfo.minHeap)
        })
        .catch((err) => console.log('err', err))
    }

    /**
     * 设置默认选中属性
     * @param {Object} data
     */
    const setDefaultAttrSelect = (data) => {
      state.attr.productSelect.storeName = state.goodsInfo.prodName
      state.attr.productSelect.image = data.pic
      state.attr.productSelect.price = data.price
      state.attr.productSelect.actualStocks = data.actualStocks
      state.attr.productSelect.limits = data.limits
      state.attr.productSelect.cart_num = 1
      state.attrValue = ''
      state.attrTxt = '已选择'

      if (data.properties) {
        const properties = JSON.parse(data.properties)
        Object.keys(properties).forEach((v) => {
          setAttrVal(properties[v], v)
        })
      }
    }

    /**
     * 设置是否打开属性面板
     */
    const setIsOpenAttrWindow = (flag) => {
      state.attr.isOpenAttrWindow = flag
    }

    /**
     * 设置是否立即购买
     */
    const setIsBuyNow = (flag) => {
      state.isBuyNow = flag
    }

    /**
     * 关闭属性面板回调事件
     *
     */
    const closeWindow = () => {
      setIsBuyNow(false)
      setIsOpenAttrWindow(false)
    }

    /**
     * 属性选中确认回调
     */
    const confirm = () => {
      const { proxy } = getCurrentInstance() as any
      const { buyNow, addCart, groupBuyingNow } = proxy.$refs.detailFooterBar
      setIsOpenAttrWindow(false)
      state.isBuyNow ? buyNow() : addCart()
      setIsBuyNow(false)
    }

    /**
     * 购物车数量加和数量减
     *
     */
    const changeCartNum = (changeValue) => {
      // changeValue:是否 加|减
      let stock = state.attr.productSelect.stock || 0
      let num = state.attr.productSelect
      if (changeValue) {
        num.cart_num++
        if (num.cart_num > stock) {
          state.attr.productSelect.cart_num = stock
          state.cart_num = stock
        }
      } else {
        num.cart_num--
        if (num.cart_num < 1) {
          state.attr.productSelect.cart_num = 1
          state.cart_num = 1
        }
      }
    }

    /**
     * 选中的SKU属性之后的操作
     *
     */
    const selectAttrVal = (attrval, attrid) => {
      setAttrVal(attrval, attrid)
      // const goods = this.commonCartParam(false)
      const goods = {} as any
      if (goods) {
        state.attr.productSelect.image = goods.productSkuVO.pic
        state.attr.productSelect.price = goods.productSkuVO.price
        state.attr.productSelect.stock = goods.productSkuVO.actualStocks
      }
    }

    /**
     * 设置选中的SKU属性
     *
     */
    const setAttrVal = (attrval, attrid) => {
      state.attr.productAttr = state.attr.productAttr.map((o) => {
        o.attrValues.map((v) => {
          if (attrval.val === v.val || attrval === v.val) {
            if (v.isSelect) {
              v.isSelect = false
            } else {
              v.isSelect = true
            }
          } else if (o.attrId === attrid) {
            v.isSelect = false
          }
          return v
        })
        return o
      })
    }

    /**
     * 购物车手动填写
     *
     */
    const iptCartNum = (e) => {
      state.attr.productSelect.cart_num = e || 1
    }

    const openShare = () => {
      console.log('openShare')
    }
    onShow(() => {
      getGoodsDetail()
    })
    return {
      ...toRefs(state),
      setIsOpenAttrWindow,
      iptCartNum,
      changeCartNum,
      selectAttrVal,
      closeWindow,
      confirm,
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
