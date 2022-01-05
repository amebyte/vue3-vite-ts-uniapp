<template>
  <view class="goods-info-wrap">
    <view class="status-desc">
      <view class="content">
        <view class="l">已报名 <text>3</text> 人 剩余 <text>12</text> 个名额</view>
        <view class="r">线下课程</view>
      </view>
    </view>
    <view class="acea-row row-between row-bottom">
      <view class="good-price">
        <view class="price">
          <text class="rmb">¥</text>
          <text class="num">{{ goodsInfo.price }}</text>
        </view>
        <view class="goods-obtain-type">
          <view class="goods-obtain-wrap">
            <text class="iconfont icon-add-cart-fill"></text>
            <view class="txt">限时优惠</view>
          </view>
        </view>
      </view>
      <view class="share" @click="openShare">
        <text class="iconfont icon-share"></text>
      </view>
    </view>

    <view class="good-market-price">
      <view class="price line-through">
        <text class="rmb">¥</text>
        <text class="num">{{ goodsInfo.marketPrice }}</text>
      </view>
    </view>

    <view class="good-title">
      <text class="txt">{{ goodsInfo.prodName }}</text>
    </view>
    <view class="good-tags" style="padding-bottom: 20rpx">
      <text class="txt">{{ goodsInfo.brief }}</text>
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
const emits = defineEmits(['openShare'])
const openShare = () => {
  emits('openShare')
}
</script>
<style scoped lang="scss">
@import '@/static/css/variable.scss';
.goods-info-wrap {
  background-color: #fff;
  position: relative;
  .status-desc {
    position: absolute;
    top: -80rpx;
    left: 0;
    width: 100%;
    padding-left: 20rpx;
    padding-right: 20rpx;
    .content {
      height: 80rpx;
      background: linear-gradient(0deg, #f28e26 0%, #fd644f 100%);
      box-shadow: 0px 0px 5rpx 1rpx rgba(25, 119, 110, 0.35);
      border-radius: 20rpx 20rpx 0px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24rpx;
      padding-left: 20rpx;
      padding-right: 20rpx;
      > .l {
        color: #fff;
        text {
          padding-left: 10rpx;
          padding-right: 10rpx;
        }
      }
      > .r {
        border: 2rpx solid #fff;
        border-radius: 7rpx;
        color: #fff;
        padding: 8rpx 20rpx;
      }
    }
  }
  .good-price {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 30rpx 0 0 20rpx;
    .price {
      .rmb {
        font-size: 28rpx;
        line-height: 28rpx;
        color: $theme-font-color;
        padding-right: 8rpx;
      }

      .num {
        font-size: 64rpx;
        color: $theme-font-color;
        line-height: 44rpx;
      }
    }

    .goods-obtain-type {
      padding-left: 10rpx;

      .goods-obtain-wrap {
        font-family: PingFangSC-Light;
        width: auto;
        height: 38rpx;
        line-height: 38rpx;
        font-size: 22rpx;
        display: inline-flex;
        align-items: center;
        border-radius: 20rpx;
        padding-left: 20rpx;
        padding-right: 20rpx;
        color: #d20012;
        background-color: rgba(230, 0, 18, 0.2);

        .image {
          width: 20rpx;
          height: 20rpx;
        }

        .txt {
          padding-left: 10rpx;
        }
      }
    }
  }

  .share {
    padding-right: 20rpx;
    .iconfont {
      font-size: 50rpx;
      color: #6ebcb5;
    }
  }

  .good-market-price {
    display: inline-block;
    padding: 16rpx 0 20rpx 30rpx;
    font-size: 24rpx;
    color: #6ebcb5;
    text-decoration: line-through;
  }

  .good-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 20rpx 0rpx 10rpx 20rpx;
    position: relative;
    flex: 1;

    .txt {
      font-size: 28rpx;
      color: $theme-font-color;
      font-weight: bold;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      word-break: break-all;
      padding-right: 100rpx;
    }
  }
  .good-tags {
    display: flex;
    flex-direction: row;
    padding: 0 20rpx;

    .txt {
      width: 100%;
      padding: 8rpx;
      background-color: #ebfffd;
      font-size: 12px;
      color: #00796b;
      border-radius: 5rpx;
    }
  }
}
</style>
