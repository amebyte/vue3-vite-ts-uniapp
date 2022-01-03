<template>
  <view class="wrapper">
    <text class="iconfont icon-message"></text>
    <view class="content"> 开卓教育推出最新App服务 </view>
    <text class="iconfont icon-close-bold" @click="closeMessage"></text>
  </view>
</template>
<script setup lang="ts">
const emits = defineEmits(['closeMessage'])

const closeMessage = () => {
  emits('closeMessage')
}
</script>
<style lang="scss">
@import '@/static/css/variable.scss';
.wrapper {
  margin-top: 20rpx;
  margin-left: 20rpx;
  margin-right: 20rpx;
  padding-left: 10rpx;
  padding-right: 10rpx;
  background-color: rgba(178, 223, 219, 0.2);
  height: 50rpx;
  line-height: 50rpx;
  border-radius: 10rpx;
  display: flex;
  .content {
    font-size: 24rpx;
    color: $theme-font-color;
    font-weight: bold;
    padding-left: 10rpx;
    padding-right: 10rpx;
  }
  .iconfont {
    color: $theme-font-color;
  }
}
</style>
