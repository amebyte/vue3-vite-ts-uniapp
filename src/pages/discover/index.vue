<template>
  <view class="container">
    <!--top-bar start-->
    <view class="top-bar">
      <view class="search-icon">
        <text class="iconfont icon-search"></text>
      </view>
      <view class="title">发现</view>
      <view class="action">
        <text>发布</text>
      </view>
    </view>
    <!--top-bar end-->
    <!--banner-nav start-->
    <view class="banner-nav">
      <view class="content">
        <view class="item">
          <view class="l">
            <image
              src="http://tstatic.mevikycloud.cn/image/product/2021/07/29/12051e1933364cd68168020f923e1a9fsjokznvbvn.jpg"
              mode="scaleToFill"
            ></image>
          </view>
          <view class="r">
            <view class="name">合作伙伴</view>
            <view class="desc">我们的合作伙伴</view>
          </view>
        </view>
        <view class="item">
          <view class="l">
            <image
              src="http://tstatic.mevikycloud.cn/image/product/2021/07/29/12051e1933364cd68168020f923e1a9fsjokznvbvn.jpg"
              mode="scaleToFill"
            ></image>
          </view>
          <view class="r">
            <view class="name">品牌中心</view>
            <view class="desc">诠释我们的品牌</view>
          </view>
        </view>
      </view>
    </view>
    <!--banner-nav end-->
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
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
  .banner-nav {
    .content {
      display: flex;
      justify-content: space-between;
      .item {
        display: flex;
        justify-content: flex-start;
        padding: 30rpx 20rpx;
        padding-left: 0;
        > .l {
          image {
            width: 66rpx;
            height: 66rpx;
            border-radius: 7rpx;
          }
        }
        > .r {
          padding-left: 20rpx;
          .name {
            font-size: 28rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #00796b;
            @extend .line1;
          }
          .desc {
            font-size: 20rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #b7b7b7;
            @extend .line1;
          }
        }
        &:last-child {
          padding-right: 130rpx;
        }
      }
    }
  }
}
</style>
