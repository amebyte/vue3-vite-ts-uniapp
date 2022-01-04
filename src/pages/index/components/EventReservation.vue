<template>
  <view class="wrapper">
    <view class="title">活动预约</view>
    <view class="list">
      <block v-for="(item, index) in list" :key="index">
        <view class="item">
          <view class="image">
            <image :src="item.pic"></image>
          </view>
          <view class="info">
            <view class="name">{{ item.prodName }}</view>
            <view class="bottom">
              <view class="date">2022-02-25</view>
              <view class="btn">预约</view>
            </view>
          </view>
        </view>
      </block>
    </view>
    <view class="more">查看更多活动</view>
  </view>
</template>
<script setup lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { PropType, ref, toRefs, defineComponent, reactive, onMounted } from 'vue'
import { fetchRecommendGoodsList } from '@/api/goods'
type goodsType = {
  id: string
  pic: string
  prodName: string
  price: number
}
let list = ref<Array<goodsType>>([])
const getEventReservationList = () => {
  const params = {
    pageNum: 0,
    pageSize: 5,
  }
  fetchRecommendGoodsList(params)
    .then((r) => {
      list.value = r.data
    })
    .catch((err) => console.log(err))
}
onLoad(() => {
  getEventReservationList()
})
</script>
<style lang="scss">
@import '@/static/css/variable.scss';
.wrapper {
  background-color: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  margin-left: 20rpx;
  margin-right: 20rpx;
  margin-top: 20rpx;
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
    .item {
      display: flex;
      justify-content: space-between;
      margin: 20rpx;
      padding: 20rpx;
      background-color: #ebfffd;
      border-radius: 13px;
      .image {
        flex: 1;
        height: 133rpx;
        image {
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
      .info {
        flex: 4;
        padding-left: 20rpx;
        .name {
          @extend .line1;
          color: #022521;
          font-size: 28rpx;
          font-family: PingFang SC;
          font-weight: bold;
          height: 90rpx;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          .date {
            font-size: 28rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #808d8c;
          }
          .btn {
            width: 107rpx;
            height: 44rpx;
            line-height: 44rpx;
            background-color: #009688;
            box-shadow: 0px 3px 3px 0px rgba(7, 93, 71, 0.24);
            opacity: 0.52;
            border-radius: 7px;

            font-size: 24rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #ffffff;

            text-align: center;
          }
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
