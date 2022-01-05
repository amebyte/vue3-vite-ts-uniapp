<template>
  <view class="content-wrap">
    <view class="good-detail-title">
      <view class="title">
        <text>图文详情</text>
      </view>
    </view>
    <view class="good-detail-content">
      <rich-text :nodes="goodsInfo.content"></rich-text>
    </view>
  </view>
</template>
<script setup lang="ts">
const props = defineProps({
  goodsInfo: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
</script>
<style lang="scss">
.content-wrap {
  background-color: #fff;
  box-shadow: 0px 0px 14rpx 6rpx rgba(29, 233, 182, 0.11);
  border-radius: 20rpx;
  margin: 20rpx;
  .good-detail-title {
    .title {
      font-size: 32rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #00796b;
      letter-spacing: 4rpx;
      padding-left: 20rpx;
      padding-top: 30rpx;
    }
  }
  .good-detail-content {
    display: flex;
    flex-direction: column;
    background: #fff;
    min-height: 400rpx;
    margin-bottom: 140rpx;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    .richImg {
      max-width: 100%;
    }
  }
}
</style>
