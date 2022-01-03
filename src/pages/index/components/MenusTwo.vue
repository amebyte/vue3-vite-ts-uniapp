<template>
  <view class="wrapper">
    <view class="box">
      <view class="l">
        <view class="title">会员中心</view>
        <view class="desc">加入会员超多福利</view>
      </view>
      <view class="r">
        <image src="/static/images/skip/home-member.png" mode="scaleToFill"></image>
      </view>
    </view>
    <view class="box">
      <view class="l">
        <view class="title">开卓商城</view>
        <view class="desc">不错过每一件精品</view>
      </view>
      <view class="r">
        <image src="/static/images/skip/home-shop.png" mode="scaleToFill"></image>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    height: 187rpx;
    background: linear-gradient(0deg, #72d7cc 0%, #28cfb3 100%);
    box-shadow: 0px 5rpx 5rpx 0px rgba(29, 233, 182, 0.32);
    border-radius: 13rpx;
    margin-right: 40rpx;
    padding-left: 20rpx;
    .l {
      flex: 2;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 32rpx;
        color: #fff;
      }
      .desc {
        font-size: 20rpx;
        color: #fff;
        opacity: 0.8;
        padding-top: 10rpx;
      }
    }
    .r {
      flex: 1;
      image {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
      }
    }
    &:last-child {
      margin-right: 0;
      background: linear-gradient(0deg, #88dad5 0%, #5fcec8 100%);
      box-shadow: 0px 5px 5px 0px rgba(29, 233, 182, 0.32);
    }
  }
}
</style>
