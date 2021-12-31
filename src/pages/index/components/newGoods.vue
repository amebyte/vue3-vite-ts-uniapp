<template>
  <view class="new-user-goods-wrapper">
    <view v-if="isShow" class="wrapper">
      <view class="title acea-row row-between-wrapper">
        <view class="text">
          <view class="name line1">
            新用户专享
            <text class="new font-color">NEW~</text>
          </view>
          <view class="line1">以下商品仅享受一款优惠</view>
        </view>
        <view class="more" @click="gopage('/pages/goods/HotNewGoods/index?type=1')">
          更多
          <text class="iconfont icon-arrow-right"></text>
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
import { PropType, ref, toRefs, defineComponent, reactive, onMounted } from 'vue'
import { fetchNewUserOnlyGoodsList } from '@/api/goods'
import { goodsTypes } from '@/utils/constant'
import { Tips } from '@/utils/util'
type goodsType = {
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
    let newGoodsList: Array<goodsType> = reactive([])
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
      fetchNewUserOnlyGoodsList(params)
        .then((r) => {
          newGoodsList = r.data.list
        })
        .catch((err) => console.log(err))
    }
    onMounted(() => {
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
.new-user-goods-wrapper {
  background-color: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  margin-left: 20rpx;
  margin-right: 20rpx;
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
  color: #282828;
  font-size: 30rpx;
  font-weight: bold;
  margin-bottom: 5rpx;
  position: relative;
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
