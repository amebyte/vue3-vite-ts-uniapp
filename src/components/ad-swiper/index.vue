<template>
  <view class="ad-swiper">
    <swiper
      :indicator-dots="indicatorDots"
      indicator-active-color="#e93323"
      :autoplay="autoplay"
      :circular="circular"
      :disable-touch="disableTouch"
      :current="current"
      :interval="interval"
      :duration="duration"
      :style="'height:' + imageH + 'rpx;'"
      @change="change"
    >
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item v-if="item.type == 'video'" :style="'height:' + imageH + 'rpx;'">
          <view class="item">
            <video
              id="myVideo"
              :src="item.src"
              objectFit="cover"
              controls
              style="width: 100%; height: 100%"
              show-center-play-btn
              show-mute-btn="true"
              auto-pause-if-navigate
              :custom-cache="false"
              :enable-progress-gesture="false"
              @play="bindPlay"
              @ended="bindEnd"
              @pause="bindPause"
            ></video>
          </view>
        </swiper-item>
        <swiper-item v-else @click="openLink(index)">
          <image
            :src="item[imgKey]"
            class="slide-image"
            :mode="mode"
            :style="'height:' + imageH + 'rpx;'"
            :class="radius ? 'image-radius' : ''"
          />
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script lang="ts">
import { PropType, toRefs, defineComponent, reactive } from 'vue'
import { imgUrlsType } from '@/store/modules/banner'

export default defineComponent({
  name: 'AdSwiper',
  props: {
    imgUrls: {
      type: Array as PropType<Array<imgUrlsType>>,
      default: () => {
        return []
      },
    },
    current: {
      type: Number,
      default: 0,
    },
    imageH: {
      type: Number,
      default: 600,
    },
    radius: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: 'aspectFill',
    },
    imgKey: {
      type: String,
      default: 'src',
    },
    indicatorDots: {
      type: Boolean,
      default: true,
    },
    disableTouch: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['open', 'update:current'],
  setup(props, { emit }) {
    let state = reactive({
      circular: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      currents: 1,
      controls: true,
    })

    const bindPause = function () {
      state.autoplay = false
    }
    const change = (e: { detail: { current: number } }) => {
      emit('update:current', e.detail.current)
      state.currents = e.detail.current + 1
    }
    const openLink = (i: any) => {
      emit('open', i)
    }

    const bindPlay = () => {
      state.autoplay = false
    }

    const bindEnd = () => {
      state.autoplay = true
    }

    const goToGoods = (link: any) => {
      if (link) {
        uni.navigateTo({
          url: link,
        })
      }
    }

    return {
      ...toRefs(state),
      bindPause,
      change,
      openLink,
      bindPlay,
      bindEnd,
      goToGoods,
    }
  },
})
</script>

<style scoped lang="scss">
.ad-swiper {
  width: 100%;
  // height: 600rpx;
  position: relative;
}

.ad-swiper swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

.ad-swiper .slide-image {
  width: 100%;
  // height: 600rpx;
}

.image-radius {
  border-radius: 20rpx;
}

.ad-swiper .pages {
  position: absolute;
  background-color: #fff;
  height: 34rpx;
  padding: 0 10rpx;
  border-radius: 3rpx;
  right: 30rpx;
  bottom: 30rpx;
  line-height: 34rpx;
  font-size: 24rpx;
  color: #050505;
}

#myVideo {
  width: 100%;
  height: 100%;
}

.ad-swiper .item {
  position: relative;
  width: 100%;
  height: 100%;
}

.ad-swiper .item .poster {
  position: absolute;
  top: 0;
  left: 0;
  height: 750rpx;
  width: 100%;
  z-index: 9;
}

.ad-swiper .item .poster .image {
  width: 100%;
  height: 100%;
}

.ad-swiper .item .stop {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 136rpx;
  height: 136rpx;
  margin-top: -68rpx;
  margin-left: -68rpx;
  z-index: 9;
}

.ad-swiper .item .stop .image {
  width: 100%;
  height: 100%;
}
</style>
