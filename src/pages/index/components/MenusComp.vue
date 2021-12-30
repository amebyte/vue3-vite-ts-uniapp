<template>
  <view>
    <view v-if="menus.length" class="nav acea-row acea-row">
      <block v-for="(item, index) in menus" :key="index">
        <view class="item" @click="menusTap(item.path)">
          <view class="pictrue">
            <image :src="item.url"></image>
          </view>
          <view class="menu-txt">{{ item.title }}</view>
        </view>
      </block>
    </view>

    <view v-else class="nav acea-row acea-row">
      <view class="item">
        <view class="pictrue default">
          <text class="iconfont icon-icon25201"></text>
        </view>
        <view class="menu-txt">默认</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from 'vue'
type menuType = {
  url: string
  title: string
  path: string
}
export default defineComponent({
  name: 'MenusComp',
  props: {
    menusConfig: {
      type: Array as PropType<Array<menuType>>,
      default: () => {
        return []
      },
    },
  },
  setup(props) {
    console.log('props.dataConfig222', props.menusConfig)
    const menus = computed(() => {
      console.log('props.dataConfig', props.menusConfig)
      let m = props.menusConfig
      // #ifdef MP
      m.forEach((item) => {
        item.url = '../' + item.url
      })
      // #endif
      return m
    })
    console.log('menus', menus.value)
    const menusTap = (url) => {
      if (url.indexOf('http') != -1) {
        // #ifdef H5
        location.href = url
        // #endif
      } else {
        uni.navigateTo({
          url: url,
        })
      }
    }

    return {
      menus,
      menusTap,
    }
  },
})
</script>

<style lang="scss">
.nav {
  background-color: #fff;
  padding-bottom: 30rpx;
  border-radius: 16rpx;

  .item {
    margin-top: 30rpx;
    width: 20%;
    text-align: center;
    font-size: 24rpx;

    .pictrue {
      width: 82rpx;
      height: 82rpx;
      margin: 0 auto;

      &.default {
        background-color: #ccc;
        border-radius: 50%;
        text-align: center;
        line-height: 90rpx;

        .iconfont {
          font-size: 40rpx;
        }
      }

      image {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .menu-txt {
      margin-top: 15rpx;
    }

    &.four {
      width: 25%;

      .pictrue {
        width: 90rpx;
        height: 90rpx;
      }
    }
  }
}
</style>
