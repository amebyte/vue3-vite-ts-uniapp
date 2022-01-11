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
        <view class="year-month">/2022.06 <text class="iconfont icon-arrow-down"></text></view>
      </view>
      <view class="subscribe-num">已预约<text>1</text>场活动</view>
    </view>
    <!--预约次数 end-->
    <!--日历 start-->
    <view class="calendar-wrap">
      <Calendar />
    </view>
    <!--日历 end-->
    <view class="activity-sessions"> - 当天共 <text>3</text> 场活动 - </view>
    <!--日历 end-->
    <!--预约列表 start-->
    <view class="list">
      <view class="item">
        <view class="time">
          <text class="iconfont icon-time"></text>
          9:00-10:00
        </view>
        <view class="title"> 活动主题-活动标题名字活动标题名字活动标题名字活动标题名字活动标题名字活动标题名字 </view>
        <view class="action">
          <view class="l">
            <text class="iconfont icon-people"></text>
            限定 20 人
          </view>
          <view class="r">立即预约</view>
        </view>
      </view>
      <view class="item full">
        <view class="time">
          <text class="iconfont icon-time"></text>
          9:00-10:00
        </view>
        <view class="title"> 活动主题-活动标题名字活动标题名字活动标题名字活动标题名字活动标题名字活动标题名字 </view>
        <view class="action">
          <view class="l">
            <text class="iconfont icon-people"></text>
            限定 20 人
          </view>
          <view class="r">人数已满</view>
        </view>
      </view>
    </view>
    <!--预约列表 end-->
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
          font-size: 22rpx;
          color: #fff;
          background-color: #dbdbdb;
          border-radius: 50%;
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
  .calendar-wrap {
    background: #ffffff;
    box-shadow: 0px 0px 14rpx 6rpx rgba(29, 233, 182, 0.11);
    border-radius: 20rpx;
    margin-top: 40rpx;
    margin-bottom: 40rpx;
    height: 280rpx;
    overflow: hidden;
  }
  .activity-sessions {
    text-align: center;
    font-size: 24rpx;
    font-family: PingFang SC;
    font-weight: bold;
    color: #00beac;
    margin-top: 30rpx;
    margin-bottom: 40rpx;
    text {
      font-size: 32rpx;
      color: #009688;
    }
  }
  .list {
    .item {
      height: 246rpx;
      border: 3rpx solid #ffffff;
      background: linear-gradient(200deg, #2fb383 0%, #18a86b 100%);
      box-shadow: 0px 0px 14rpx 6rpx rgba(29, 233, 182, 0.11);
      border-radius: 20rpx;
      padding: 20rpx;
      margin-bottom: 40rpx;
      .time {
        font-size: 32rpx;
        font-family: Hiragino Sans GB;
        font-weight: normal;
        color: #ebfffd;
        .iconfont {
          font-size: 32rpx;
        }
      }
      > .title {
        padding-top: 30rpx;
        padding-bottom: 30rpx;
        font-size: 35rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
        @extend .line1;
      }
      .action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .l {
          font-size: 32rpx;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ebfffd;
          .iconfont {
            font-size: 40rpx;
          }
        }
        .r {
          background-color: #ffffff;
          border-radius: 27rpx;
          font-size: 26rpx;
          font-family: PingFang SC;
          font-weight: 400;
          color: #21ac74;
          padding: 10rpx 20rpx;
        }
      }
      &.full {
        border: 3rpx solid #ffffff;
        background: linear-gradient(200deg, #fffeff 0%, #d7fffe 100%);
        box-shadow: 0px 0px 14rpx 6rpx rgba(29, 233, 182, 0.11);
        border-radius: 20rpx;
        .time {
          color: #009688;
          .iconfont {
            color: #38f8d4;
          }
        }
        > .title {
          color: #009688;
        }
        .action {
          .l {
            color: #009688;
            .iconfont {
              color: #38f8d4;
            }
          }
          .r {
            border: 3rpx solid #009688;
            border-radius: 27rpx;
            color: #009688;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
@import '@/static/css/variable.scss';
page {
  background-color: $background-color;
}
</style>
