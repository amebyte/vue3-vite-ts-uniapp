<template>
  <view class="wrapper">
    <view class="title">专家答疑</view>
    <view class="list">
      <view class="item">
        <view class="question-box">
          <view class="label"><view class="text">问</view></view>
          <view class="content">水培是什么意思？</view>
        </view>
        <view class="answers-box">
          <view class="label"><view class="text">答</view></view>
          <view class="content">水培是什么意思？</view>
        </view>
      </view>
      <view class="item">
        <view class="question-box">
          <view class="label"><view class="text">问</view></view>
          <view class="content">水培是什么意思？水培是什么意思？水培是什么意思？水培是什么意思？水培是什么意思？</view>
        </view>
        <view class="answers-box">
          <view class="label"><view class="text">答</view></view>
          <view class="content">水培是什么意思？水培是什么意思？水培是什么意思？水培是什么意思？水培是什么意思？</view>
        </view>
      </view>
      <view class="item">
        <view class="question-box">
          <view class="label"><view class="text">问</view></view>
          <view class="content">水培是什么意思？</view>
        </view>
        <view class="answers-box">
          <view class="label"><view class="text">答</view></view>
          <view class="content">水培是什么意思？</view>
        </view>
      </view>
    </view>
    <view class="more">查看更多答疑</view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss">
@import '@/static/css/variable.scss';
.wrapper {
  background-color: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  margin-left: 20rpx;
  margin-right: 20rpx;
  margin-top: 20rpx;
  margin-bottom: 40rpx;
  box-shadow: 0rpx 0rpx 14rpx 6rpx rgba(29, 233, 182, 0.11);
  .title {
    color: $theme-font-color;
    font-size: 37rpx;
    font-family: PingFang SC;
    font-weight: bold;
    padding-left: 20rpx;
    padding-top: 30rpx;
    padding-bottom: 20rpx;
    letter-spacing: 4rpx;
  }
  .list {
    padding-left: 20rpx;
    padding-right: 20rpx;
    margin-bottom: 20rpx;
    .item {
      padding-top: 60rpx;
      padding-bottom: 60rpx;
      border-bottom: 3rpx solid #abf5ee;
      .question-box {
        display: flex;
        padding-bottom: 20rpx;
        .label {
          flex: 1;
          display: flex;
          justify-content: center;
          .text {
            width: 47rpx;
            height: 47rpx;
            line-height: 47rpx;
            background: linear-gradient(0deg, #2fb383 0%, #18a86b 100%);
            opacity: 0.6;
            border-radius: 7px;

            font-size: 28rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #fff;
            text-align: center;
          }
        }
        .content {
          flex: 5;
        }
      }
      .answers-box {
        padding-top: 20rpx;
        display: flex;
        .label {
          flex: 1;
          display: flex;
          justify-content: center;
          .text {
            width: 47rpx;
            height: 47rpx;
            line-height: 47rpx;
            background: linear-gradient(0deg, #72d7cc 0%, #28cfb3 100%);
            opacity: 0.6;
            border-radius: 7px;

            font-size: 28rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #fff;
            text-align: center;
          }
        }
        .content {
          flex: 5;
          color: #00796b;
        }
      }
    }
  }
  .more {
    font-size: 32rpx;
    font-family: PingFang SC;
    font-weight: bold;
    text-decoration: underline;
    color: #70c8c0;
    text-align: center;
    padding-top: 20rpx;
    padding-bottom: 40rpx;
    letter-spacing: 4rpx;
  }
}
</style>
