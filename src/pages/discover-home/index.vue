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
    <!--答疑列表 start-->
    <view class="list">
      <view v-for="item in 3" :key="item" class="item">
        <view class="recommend"><text>精选</text></view>
        <view class="user-info">
          <view class="profile">
            <view class="l">
              <image
                src="http://tstatic.mevikycloud.cn/image/product/2021/07/29/12051e1933364cd68168020f923e1a9fsjokznvbvn.jpg"
                mode="scaleToFill"
              ></image>
            </view>
            <view class="r">
              <view class="name">专家答疑</view>
              <view class="desc">1小时前</view>
            </view>
          </view>
          <view class="more">
            <text class="iconfont icon-more"></text>
          </view>
        </view>
        <view class="text-content">
          专家答疑专家答疑专家答疑专家答疑专家答疑专家答疑专家答疑专家答疑专家答疑专家答疑专家答疑专家答疑
        </view>
        <view class="image-list">
          <view class="image">
            <image
              src="http://tstatic.mevikycloud.cn/image/product/2021/07/29/12051e1933364cd68168020f923e1a9fsjokznvbvn.jpg"
              mode="scaleToFill"
            ></image>
          </view>
          <view class="image">
            <image
              src="http://tstatic.mevikycloud.cn/image/product/2021/07/29/12051e1933364cd68168020f923e1a9fsjokznvbvn.jpg"
              mode="scaleToFill"
            ></image>
          </view>
          <view class="image">
            <image
              src="http://tstatic.mevikycloud.cn/image/product/2021/07/29/12051e1933364cd68168020f923e1a9fsjokznvbvn.jpg"
              mode="scaleToFill"
            ></image>
          </view>
          <view class="image">
            <image
              src="http://tstatic.mevikycloud.cn/image/product/2021/07/29/12051e1933364cd68168020f923e1a9fsjokznvbvn.jpg"
              mode="scaleToFill"
            ></image>
          </view>
        </view>
        <view class="interact-status">
          <view class="status">
            <text class="iconfont icon-love"></text>
            <text class="txt">6544</text>
          </view>
          <view class="status">
            <text class="iconfont icon-comment"></text>
            <text class="txt">65</text>
          </view>
          <view class="status">
            <text class="iconfont icon-uninterested"></text>
            <text class="txt">不感兴趣</text>
          </view>
        </view>
      </view>
    </view>
    <!--答疑列表 end-->
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
    margin-bottom: 40rpx;
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
  .list {
    .item {
      padding: 20rpx;
      box-shadow: 0px 0px 14rpx 6rpx rgba(29, 233, 182, 0.11);
      border-radius: 20rpx;
      margin-bottom: 20rpx;
      .recommend {
        text {
          background-color: #80c269;
          border-radius: 7rpx;
          font-size: 19rpx;
          font-family: Hiragino Sans GB;
          font-weight: bold;
          font-style: italic;
          color: #ffffff;
          padding: 5rpx 10rpx;
        }
      }
      .user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .profile {
          display: flex;
          justify-content: flex-start;
          padding: 30rpx 20rpx;
          padding-left: 0;
          padding-bottom: 20rpx;
          > .l {
            image {
              width: 66rpx;
              height: 66rpx;
              border-radius: 50%;
            }
          }
          > .r {
            padding-left: 20rpx;
            .name {
              font-size: 28rpx;
              font-family: PingFang SC;
              font-weight: bold;
              color: #80c269;
              @extend .line1;
            }
            .desc {
              font-size: 20rpx;
              font-family: PingFang SC;
              font-weight: bold;
              color: #a6a6a6;
              @extend .line1;
            }
          }
        }
        .more {
          width: 40rpx;
          overflow: hidden;
          margin-left: 10rpx;
          .icon-more {
            font-size: 60rpx;
            color: #bfbfbf;
          }
        }
      }
      .text-content {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #050505;
        line-height: 40rpx;
        padding-left: 20rpx;
        padding-right: 20rpx;
      }
      .image-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20rpx;
        padding-left: 20rpx;
        padding-right: 20rpx;
        .image {
          width: 193rpx;
          height: 193rpx;
          border-radius: 7rpx;
          margin-bottom: 20rpx;
          image {
            width: 100%;
            height: 100%;
            border-radius: 7rpx;
          }
        }
      }
      .interact-status {
        display: flex;
        justify-content: flex-start;
        margin-top: 20rpx;
        margin-bottom: 20rpx;
        padding-left: 20rpx;
        > .status {
          margin-right: 40rpx;
          .iconfont {
            font-size: 50rpx;
            color: #a6a6a6;
          }
          .txt {
            font-size: 21rpx;
            font-family: Hiragino Sans GB;
            font-weight: bold;
            color: #a6a6a6;
            padding-left: 10rpx;
          }
        }
      }
    }
  }
}
</style>
