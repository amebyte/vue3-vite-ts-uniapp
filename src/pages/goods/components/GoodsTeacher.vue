<template>
  <view class="teacher-wrap">
    <view class="content">
      <view class="title">授课老师</view>
      <view class="list">
        <view class="item">
          <view class="l">
            <image
              src="http://tstatic.mevikycloud.cn/image/product/2021/07/29/12051e1933364cd68168020f923e1a9fsjokznvbvn.jpg"
              mode="scaleToFill"
            ></image>
          </view>
          <view class="r">
            <view class="name">黄XX老师</view>
            <view class="desc">黄XX老师黄XX老师黄XX老师黄XX老师黄XX老师</view>
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
            <view class="name">黄XX老师</view>
            <view class="desc">黄XX老师黄XX老师黄XX老师黄XX老师黄XX老师</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss">
@import '@/static/css/variable.scss';
.teacher-wrap {
  margin-left: 20rpx;
  margin-right: 20rpx;
  .content {
    background: #ffffff;
    box-shadow: 0rpx 0rpx 14rpx 6rpx rgba(29, 233, 182, 0.11);
    border-radius: 20rpx;
    .title {
      font-size: 32rpx;
      font-family: PingFang SC;
      font-weight: bold;
      color: #00796b;
      letter-spacing: 4rpx;
      padding-left: 20rpx;
      padding-top: 30rpx;
    }
    .list {
      .item {
        display: flex;
        justify-content: flex-start;
        padding: 30rpx 20rpx;
        border-bottom: 2rpx solid #f5f3f3;
        > .l {
          image {
            width: 100rpx;
            height: 100rpx;
            border-radius: 7rpx;
          }
        }
        > .r {
          padding-left: 20rpx;
          .name {
            font-size: 32rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #00796b;
            padding-bottom: 20rpx;
            @extend .line1;
          }
          .desc {
            font-size: 24rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #b7b7b7;
            @extend .line1;
          }
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
