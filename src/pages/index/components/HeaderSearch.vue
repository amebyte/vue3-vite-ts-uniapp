<template>
  <!-- #ifdef H5 -->
  <view class="header">
    <view class="search-wrapper acea-row row-middle">
      <view class="input acea-row row-middle fillet" hover-class="none" @click="goPage">
        <text class="iconfont icon-search"></text>
        搜索开卓好物，提高生活品质</view
      >
    </view>
  </view>
  <!-- #endif -->
  <!-- #ifdef MP -->
  <view class="mp-header" :style="{ 'padding-top': sysHeight + 'px' }">
    <view class="search-box">
      <view class="search-wrapper acea-row row-middle">
        <navigator url="/pages/goods/goods-search/index" class="input acea-row row-middle fillet" hover-class="none">
          <text class="iconfont icon-search"></text>
          搜索开卓好物，提高生活品质</navigator
        >
      </view>
    </view>
  </view>
  <!-- #endif -->
</template>

<script lang="ts">
import { PropType, ref, toRefs, defineComponent, getCurrentInstance, reactive, onMounted } from 'vue'

export default defineComponent({
  name: 'HeaderSearch',
  setup() {
    const { proxy } = getCurrentInstance() as any
    const sysHeight = ref(proxy.$CustomBar)
    const goPage = () => {
      uni.navigateTo({
        url: '/pages/goods/goods-search/index',
      })
    }
    return {
      sysHeight,
      goPage,
    }
  },
})
</script>

<style lang="scss">
/* #ifdef H5 */
.header {
  width: 100%;
  height: 100rpx;

  .search-wrapper {
    padding: 20rpx 50rpx 0 53rpx;

    .input {
      height: 58rpx;
      padding: 0 0 0 30rpx;
      background: #fff;
      border: 1px solid #fff;
      color: #999;
      font-size: 28rpx;
      flex: 1;

      .iconfont {
        margin-right: 20rpx;
        color: #555555;
      }

      // 没有logo，直接搜索框
      &.on {
        width: 100%;
      }

      // 设置圆角
      &.fillet {
        border-radius: 29rpx;
      }

      // 文本框文字居中
      &.row-center {
        padding: 0;
      }
    }
  }
}

/* #endif */
/* #ifdef MP */
.mp-header {
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  .search-wrapper {
    height: 100%;
    padding: 0 20rpx;

    .input {
      padding: 10rpx 24rpx;
      height: auto;
      background: #fff;
      border: 1px solid #fff;
      color: #999;
      font-size: 28rpx;
      flex: 1;

      .iconfont {
        margin-right: 20rpx;
        color: #555555;
      }

      // 没有logo，直接搜索框
      &.on {
        width: 70%;
      }

      // 设置圆角
      &.fillet {
        border-radius: 16px;
      }

      // 文本框文字居中
      &.row-center {
        padding: 0;
      }
    }
  }
}

/* #endif */
</style>
