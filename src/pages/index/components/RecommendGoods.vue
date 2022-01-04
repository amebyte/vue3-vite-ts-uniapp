<template>
  <view class="new-user-goods-wrapper">
    <view v-if="isShow" class="wrapper">
      <view class="title acea-row row-between-wrapper">
        <view class="text">
          <view class="name line1"> 精选课程 </view>
        </view>
      </view>
      <view class="newProducts">
        <block v-if="!newGoodsList.length">
          <view class="empty-img">暂无数据</view>
        </block>
        <block v-else>
          <scroll-view class="scroll-view_x" scroll-x style="width: auto; overflow: hidden">
            <block v-for="(item, index) in newGoodsList" :key="index">
              <view class="item" @click="goDetail(item)">
                <view class="img-box">
                  <image :src="item.pic"></image>
                </view>
                <view class="pro-info line1">{{ item.prodName }}</view>
                <view class="money font-color">新人价：￥{{ item.price }}</view>
              </view>
            </block>
          </scroll-view>
        </block>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { PropType, ref, toRefs, defineComponent, reactive, onMounted } from 'vue'
import { fetchRecommendGoodsList } from '@/api/goods'
import { goodsTypes } from '@/utils/constant'
import { Tips } from '@/utils/util'
type goodsType = {
  id: string
  pic: string
  prodName: string
  price: number
}
export default defineComponent({
  name: 'NewGoods',
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    let newGoodsList = ref<Array<goodsType>>([])
    const goDetail = (item) => {
      Tips(`/pages/goods/goodsDetail?productId=${item.productId}&type=${goodsTypes.NEW_USER_ONLY}`)
    }
    const gopage = (url) => {
      Tips(url)
    }
    const getNewGoodsList = () => {
      const params = {
        pageNum: 0,
        pageSize: 10,
      }
      fetchRecommendGoodsList(params)
        .then((r) => {
          console.log('r', r)
          newGoodsList.value = r.data
          console.log('newGoodsList', newGoodsList)
        })
        .catch((err) => console.log(err))
    }
    onLoad(() => {
      getNewGoodsList()
    })
    return {
      newGoodsList,
      goDetail,
      gopage,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/static/css/variable.scss';
.new-user-goods-wrapper {
  background-color: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  margin-left: 20rpx;
  margin-right: 20rpx;
  box-shadow: 0rpx 0rpx 14rpx 6rpx rgba(29, 233, 182, 0.11);
}
.new-user-goods-wrapper .title {
  padding-top: 34rpx;
  margin: 0 30rpx;
}
.acea-row.row-between-wrapper {
  -o-box-align: center;
  align-items: center;
  -o-box-pack: justify;
  justify-content: space-between;
}
.acea-row {
  display: flex;
  -webkit-box-lines: multiple;
  -moz-box-lines: multiple;
  -o-box-lines: multiple;
  flex-wrap: wrap;
}
.new-user-goods-wrapper .title .text {
  font-size: 24rpx;
  color: #999;
  width: 530rpx;
}
.new-user-goods-wrapper .title .text .name {
  color: $theme-font-color;
  font-size: 37rpx;
  font-weight: bold;
  margin-bottom: 5rpx;
  position: relative;
  letter-spacing: 4rpx;
}
.line1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.new-user-goods-wrapper .title .text .name .new {
  position: absolute;
  top: 2rpx;
  left: 160rpx;
  font-size: 16rpx;
  font-weight: bold;
}
.font-color,
.font-color-red {
  color: #fc4141 !important;
}
.new-user-goods-wrapper .title .more {
  font-size: 26rpx;
  color: #c1c1c1;
}

.wrapper .newProducts {
  white-space: nowrap;
  padding: 0 30rpx;
  margin: 35rpx 0 32rpx 0;
}

.wrapper .newProducts .item {
  display: inline-block;
  width: 240rpx;
  margin-right: 20rpx;
  border: 1rpx solid #eee;
  border-radius: 20rpx;
}

.wrapper .newProducts .item:nth-last-child(1) {
  margin-right: 0;
}

.wrapper .newProducts .item .img-box {
  width: 100%;
  height: 240rpx;
  position: relative;
}

.wrapper .newProducts .item .img-box image {
  width: 100%;
  height: 100%;
  border-radius: 20rpx 20rpx 0 0;
}

.wrapper .newProducts .item .pro-info {
  font-size: 28rpx;
  color: #333;
  text-align: center;
  padding: 19rpx 10rpx 0 10rpx;
}

.wrapper .newProducts .item .money {
  padding: 0 10rpx 18rpx 10rpx;
  text-align: center;
  font-size: 26rpx;
  font-weight: bold;
}

.empty-img {
  width: 690rpx;
  height: 300rpx;
  border-radius: 14rpx;
  margin: 26rpx auto 0 auto;
  background-color: #ccc;
  text-align: center;
  line-height: 300rpx;
  .iconfont {
    font-size: 50rpx;
  }
}
</style>
