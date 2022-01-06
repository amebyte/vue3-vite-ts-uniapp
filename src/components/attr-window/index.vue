<template>
  <view>
    <view
      class="product-window"
      :class="
        (attr.isOpenAttrWindow === true ? 'on' : '') + ' ' + (iSbnt ? 'join' : '') + ' ' + (iScart ? 'joinCart' : '')
      "
    >
      <view class="textpic acea-row row-between-wrapper">
        <view class="pictrue">
          <image :src="attr.productSelect.image"></image>
        </view>
        <view class="text">
          <view class="line1">
            {{ attr.productSelect.storeName }}
          </view>
          <view class="money font-color">
            ￥<text class="num">{{ attr.productSelect.price }}</text>
            <text class="stock">{{ attr.productSelect.limits ? '限量' : '库存' }}: {{ attr.productSelect.stock }}</text>
          </view>
        </view>
        <view class="iconfont icon-close-circle" @click="closeWindow"></view>
      </view>
      <view class="rollTop">
        <view class="productWinList">
          <view v-for="(item, indexw) in attr.productAttr" :key="indexw" class="item">
            <view class="title">{{ item.attrName }}</view>
            <view class="listn acea-row row-middle">
              <view
                v-for="(itemChild, indexChild) in item.attrValues"
                :key="indexChild"
                class="itemn"
                :class="itemChild.isSelect ? 'on' : ''"
                @click="tapAttr(itemChild, item.attrId)"
              >
                {{ itemChild.val }}
              </view>
            </view>
          </view>
        </view>
        <view class="cart acea-row row-between-wrapper">
          <view class="title">数量</view>
          <view class="carnum acea-row row-left">
            <view class="item reduce" :class="attr.productSelect.cart_num <= 1 ? 'on' : ''" @click="cartNumDes">
              -
            </view>
            <view class="item num">
              <input
                v-model="cartNum"
                type="number"
                data-name="productSelect.cart_num"
                @input="bindCode(attr.productSelect.cart_num)"
              />
            </view>
            <view
              v-if="iSplus"
              class="item plus"
              :class="attr.productSelect.cart_num >= attr.productSelect.stock ? 'on' : ''"
              @click="cartNumAdd"
            >
              +
            </view>
            <view
              v-else
              class="item plus"
              :class="
                attr.productSelect.cart_num >= attr.productSelect.quota ||
                attr.productSelect.cart_num >= attr.productSelect.stock ||
                attr.productSelect.cart_num >= attr.productSelect.num
                  ? 'on'
                  : ''
              "
              @click="cartNumAdd"
              >+</view
            >
          </view>
        </view>
      </view>
      <view v-if="isGroupBuying && attr.productSelect.stock" class="joinBnt bg-color" @click="confirm">我要参团</view>
      <view
        v-else-if="(iSbnt && attr.productSelect.quota <= 0) || (iSbnt && attr.productSelect.stock <= 0)"
        class="joinBnt on"
        >已售罄</view
      >
      <view v-if="iScart && attr.productSelect.stock" class="joinBnt bg-color" @click="confirm">确定</view>
      <view v-else-if="iScart && !attr.productSelect.stock" class="joinBnt on">已售罄</view>
    </view>
    <view class="mask" :hidden="attr.isOpenAttrWindow === false" @touchmove.prevent @click="closeWindow"></view>
  </view>
</template>

<script lang="ts">
import { onPageScroll, onLoad, onShow, onHide, onReachBottom } from '@dcloudio/uni-app'
import { PropType, defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'AttrWindow',
  props: {
    attr: {
      type: Object as PropType<any>,
      default: () => {
        return {}
      },
    },
    isGroupBuying: {
      type: Number,
      default: 0,
    },
    iSplus: {
      type: Number,
      default: 0,
    },
    iScart: {
      type: Number,
      default: 0,
    },
    iSbnt: {
      type: Number,
      default: 0,
    },
    pointsMode: {
      type: Number,
      default: () => undefined,
    },
  },
  emits: ['confirm', 'iptCartNum', 'closeWindow', 'changeCartNum', 'selectAttrVal'],
  setup(props, { emit }) {
    let cartNum = computed({
      get: () => props.attr.productSelect.cart_num,
      set: (val) => emit('iptCartNum', val),
    })

    const confirm = () => {
      emit('confirm')
    }
    /**
     * 购物车手动输入数量
     *
     */
    const bindCode = (e) => {
      emit('iptCartNum', props.attr.productSelect.cart_num)
    }
    const closeWindow = () => {
      emit('closeWindow')
    }
    const cartNumDes = () => {
      emit('changeCartNum', false)
    }
    const cartNumAdd = () => {
      emit('changeCartNum', true)
    }
    const tapAttr = (attrval, attrid) => {
      emit('selectAttrVal', attrval, attrid)
    }
    return {
      cartNum,
      confirm,
      bindCode,
      closeWindow,
      cartNumDes,
      cartNumAdd,
      tapAttr,
    }
  },
})
</script>

<style scoped lang="scss">
@import '@/static/css/variable.scss';
.product-window {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background-color: #fff;
  z-index: 77;
  border-radius: 16rpx 16rpx 0 0;
  padding-bottom: 140rpx;
  transform: translate3d(0, 100%, 0);
  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}

.product-window.on {
  transform: translate3d(0, 0, 0);
}

.product-window.join {
  padding-bottom: 30rpx;
}

.product-window.joinCart {
  padding-bottom: 30rpx;
  z-index: 999;
}

.product-window .textpic {
  padding: 0 130rpx 0 30rpx;
  margin-top: 29rpx;
  position: relative;
}

.product-window .textpic .pictrue {
  width: 150rpx;
  height: 150rpx;
}

.product-window .textpic .pictrue image {
  width: 100%;
  height: 100%;
  border-radius: 10rpx;
}

.product-window .textpic .text {
  width: 410rpx;
  font-size: 32rpx;
  color: #333333;
}

.product-window .textpic .text .money {
  font-size: 24rpx;
  margin-top: 40rpx;
}

.product-window .textpic .text .money .num {
  font-size: 36rpx;
}

.product-window .textpic .text .money .stock {
  color: #999;
  margin-left: 18rpx;
}

.product-window .textpic .iconfont {
  position: absolute;
  right: 30rpx;
  top: -5rpx;
  font-size: 35rpx;
  color: #8a8a8a;
}

.product-window .rollTop {
  max-height: 500rpx;
  overflow: auto;
  margin-top: 36rpx;
}

.product-window .productWinList .item ~ .item {
  margin-top: 36rpx;
}

.product-window .productWinList .item .title {
  font-size: 30rpx;
  color: #999;
  padding: 0 30rpx;
}

.product-window .productWinList .item .listn {
  padding: 0 30rpx 0 16rpx;
}

.product-window .productWinList .item .listn .itemn {
  border: 1px solid #f2f2f2;
  font-size: 26rpx;
  color: #282828;
  padding: 7rpx 33rpx;
  border-radius: 40rpx;
  margin: 20rpx 0 0 14rpx;
  background-color: #f2f2f2;
}

.product-window .productWinList .item .listn .itemn.on {
  color: $theme-font-color;
  background: rgba(255, 244, 243, 1);
  border-color: $theme-font-color;
}

.product-window .productWinList .item .listn .itemn.limit {
  color: #999;
  text-decoration: line-through;
}

.product-window .cart {
  margin-top: 36rpx;
  padding: 0 30rpx;
}

.product-window .cart .title {
  font-size: 30rpx;
  color: #999;
}

.product-window .cart .carnum {
  height: 54rpx;
  margin-top: 24rpx;
}

.product-window .cart .carnum view {
  // border: 1px solid #a4a4a4;
  width: 84rpx;
  text-align: center;
  height: 100%;
  line-height: 54rpx;
  color: #282828;
  font-size: 45rpx;
}

.product-window .cart .carnum .reduce {
  border-right: 0;
  border-radius: 6rpx 0 0 6rpx;
  line-height: 48rpx;
}

.product-window .cart .carnum .reduce.on {
  // border-color: #e3e3e3;
  color: #dedede;
  font-size: 44rpx;
}

.product-window .cart .carnum .plus {
  border-left: 0;
  border-radius: 0 6rpx 6rpx 0;
  line-height: 46rpx;
}

.product-window .cart .carnum .plus.on {
  border-color: #e3e3e3;
  color: #dedede;
}

.product-window .cart .carnum .num {
  background: rgba(242, 242, 242, 1);
  color: #282828;
  font-size: 28rpx;
  border-radius: 12rpx;
  line-height: 29px;
  height: 54rpx;

  input {
    display: -webkit-inline-box;
  }
}

.product-window .joinBnt {
  font-size: 30rpx;
  width: 620rpx;
  height: 86rpx;
  border-radius: 50rpx;
  text-align: center;
  line-height: 86rpx;
  color: #fff;
  margin: 21rpx auto 0 auto;
}

.product-window .joinBnt.on {
  background-color: #bbb;
  color: #fff;
}
</style>
