<template>
  <view class="container">
    <!--top-bar start-->
    <view class="top-bar">
      <view class="search-icon">
        <text class="iconfont icon-search"></text>
      </view>
      <view class="title">活动中心</view>
      <view class="action">
        <text>发布</text>
      </view>
    </view>
    <!--top-bar end-->
    <!--预约次数 start-->
    <view class="info-bar">
      <view class="date">
        <view class="day">07</view>
        <view class="year-month">/2022.06 <text class="iconfont icon-arrow-down-bg"></text></view>
      </view>
      <view class="subscribe-num">已预约<text>1</text>场活动</view>
    </view>
    <!--预约次数 end-->
    <view>
      <Calendar />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Calendar from '@/components/calendar/calendar.vue'
</script>
<style lang="scss">
@import '@/static/css/variable.scss';
.container {
  margin: 20rpx;
  .top-bar {
    display: flex;
    justify-content: space-between;
    color: $theme-font-color;
    margin-bottom: 10rpx;
    .search-icon {
      padding-left: 15rpx;
      .icon-search {
        font-size: 32rpx;
      }
    }
    .title {
      font-size: 28rpx;
    }
    .action {
      text {
        border: 2rpx solid #009688;
        border-radius: 20rpx;
        font-size: 20rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #00796b;
        padding: 5rpx 20rpx;
      }
    }
  }
  .info-bar {
    margin-left: 20rpx;
    margin-right: 20rpx;
    display: flex;
    justify-content: space-between;
    margin-top: 40rpx;
    .date {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .day {
        font-size: 40rpx;
        font-family: PingFang SC;
        font-weight: 600;
        color: #009688;
        border-bottom: 4rpx solid #5aefc9;
        margin-right: 10rpx;
      }
      .year-month {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 600;
        color: #009688;
        .iconfont {
          color: #dbdbdb;
        }
      }
    }
    .subscribe-num {
      font-size: 24rpx;
      font-family: PingFang SC;
      font-weight: 400;
      color: #009688;
      text {
        font-size: 32rpx;
        margin-left: 5rpx;
        margin-right: 5rpx;
      }
    }
  }
}
</style>
