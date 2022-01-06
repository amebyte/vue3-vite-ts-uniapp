<template>
  <view class="footer-bar">
    <view class="item shop" @click="gotoHandler">
      <text class="iconfont icon-home"></text>
      <text class="txt">首页</text>
    </view>
    <view class="item" @click="toggleFavourite">
      <text v-if="!isFavorite" class="iconfont icon-favorite"></text>
      <text v-else class="iconfont icon-favorite-filling"></text>
      <text class="txt">收藏</text>
    </view>
    <navigator open-type="switchTab" class="item shopping-cart" url="/pages/shopping-cart/index" hover-class="none">
      <text class="iconfont icon-shopping-cart">
        <text v-if="cartCount > 0" class="good-number">{{ cartCount > 99 ? '99+' : cartCount }}</text>
      </text>
      <text class="txt">购物车</text>
    </navigator>
    <view class="item btn">
      <text class="txt add-cart" @click="joinCart">加入购物车</text>
      <text class="txt buy-now" @click="buyNowAction">立即抢购</text>
    </view>
  </view>
</template>

<script lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, reactive, toRef, computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'DetailFooterBar',
  emits: ['setIsOpenAttrWindow'],
  setup(props, { emit }) {
    let cartCount = ref(0)
    let isFavorite = ref(false)
    /**
     * 打开属性窗口
     *
     */
    const openAttrWindow = () => {
      emit('setIsOpenAttrWindow', true)
    }
    /**
     * 跳转首页
     */
    const gotoHandler = () => {
      console.log('gotoHandler')
    }
    /**
     * toggle收藏
     */
    const toggleFavourite = () => {
      console.log('toggleFavourite')
    }
    /**
     * 打开属性加入购物车
     *
     */
    const joinCart = () => {
      openAttrWindow()
    }
    /**
     * 立即购买 || 立即抢购
     *
     */
    const buyNowAction = () => {
      openAttrWindow()
    }
    return {
      cartCount,
      isFavorite,
      gotoHandler,
      toggleFavourite,
      joinCart,
      buyNowAction,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/static/css/variable.scss';
.footer-bar {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  border-top: 2rpx solid #effafa;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100rpx;
    flex: 1;

    .iconfont {
      font-size: 36rpx;
      color: $theme-font-color;
    }

    .txt {
      font-size: 20rpx;
      color: $theme-font-color;
    }

    &.shopping-cart {
      position: relative;

      .good-number {
        width: 28rpx;
        height: 28rpx;
        background-color: #ea3401;
        position: absolute;
        top: 10rpx;
        right: 20rpx;
        border-radius: 100%;
        color: #fff;
        font-size: 18rpx;
        text-align: center;
        line-height: 28rpx;
      }
    }

    &.btn {
      flex: 6;
      display: flex;
      flex-direction: row;
      .txt {
        width: 200rpx;
        height: 66rpx;
        line-height: 66rpx;
        text-align: center;
        font-size: 28rpx;
        color: #fff;
        &.add-cart {
          border-bottom-left-radius: 40rpx;
          border-top-left-radius: 40rpx;
          background-color: #1aa86c;
        }

        &.buy-now {
          border-top-right-radius: 40rpx;
          border-bottom-right-radius: 40rpx;
          background-color: #009688;
        }
      }
    }
  }
}
</style>
