<template>
  <view class="goods-info-wrap">
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
.goods-info-wrap {
  background-color: #fff;

  .good-price {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 30rpx 0 0 20rpx;

    .integral {
      .num {
        font-size: 64rpx;
        color: #e60012;
        line-height: 44rpx;
      }
      .desc {
        font-size: 28rpx;
        line-height: 28rpx;
        color: #e60012;
        padding-right: 8rpx;
      }
    }

    .plus {
      padding-left: 10rpx;
      padding-right: 15rpx;
    }

    .price {
      .rmb {
        font-size: 28rpx;
        line-height: 28rpx;
        color: #e60012;
        padding-right: 8rpx;
      }

      .num {
        font-size: 64rpx;
        color: #e60012;
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
      color: #868383;
    }
  }

  .good-market-price {
    display: inline-block;
    padding: 16rpx 0 20rpx 30rpx;
    font-size: 24rpx;
    color: #999999;
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
      color: #010101;
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
      background: #f2f2f2;
      font-size: 12px;
      color: #999;
      border-radius: 5rpx;
    }
  }
}
</style>
