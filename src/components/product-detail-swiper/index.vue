<template>
  <view class="product-bg">
    <swiper
      :indicator-dots="state.indicatorDots"
      indicator-active-color="#e93323"
      :autoplay="state.autoplay"
      :circular="state.circular"
      :interval="state.interval"
      :duration="state.duration"
      @change="change"
    >
      <swiper-item v-if="videoline">
        <view class="item">
          <view v-show="!state.controls" style="width: 100%; height: 100%">
            <video
              id="myVideo"
              :src="videoline"
              objectFit="cover"
              controls
              style="width: 100%; height: 100%"
              show-center-play-btn
              show-mute-btn="true"
              auto-pause-if-navigate
              :custom-cache="false"
              :enable-progress-gesture="false"
              :poster="imgUrls[0]"
              @pause="videoPause"
            ></video>
          </view>
          <view v-show="state.controls" class="poster">
            <image class="image" :src="imgUrls[0]"></image>
          </view>
          <view v-show="state.controls" class="stop" @tap="bindPause">
            <image class="image" src="@/static/images/stop.png"></image>
          </view>
        </view>
      </swiper-item>

      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
  </view>
</template>

<script lang="ts">
import { PropType, ref, toRefs, defineComponent, reactive, onMounted } from 'vue'
export default defineComponent({
  name: 'ProductDetailSwiper',
  props: {
    imgUrls: {
      type: Array as PropType<string[]>,
      default: () => {
        return []
      },
    },
    videoline: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    let state = reactive({
      indicatorDots: true,
      circular: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      currents: 1,
      controls: true,
      isPlay: true,
      videoContext: '' as any,
    })

    const videoPause = (e) => {
      console.log('e')
    }
    const bindPause = () => {
      state.videoContext.play()
      state.controls = false
      state.autoplay = false
    }
    const change = (e) => {
      state.currents = e.detail.current + 1
    }

    onMounted(() => {
      //   if (props.videoline) {
      //     props.imgUrls.shift()
      //   }
    })
    return {
      state,
      change,
      bindPause,
      videoPause,
    }
  },
})
</script>

<style scoped lang="scss">
.product-bg {
  width: 100%;
  height: 750rpx;
  position: relative;
}

.product-bg swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

.product-bg .slide-image {
  width: 100%;
  height: 100%;
}

.product-bg .pages {
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

.product-bg .item {
  position: relative;
  width: 100%;
  height: 100%;
}

.product-bg .item .poster {
  position: absolute;
  top: 0;
  left: 0;
  height: 750rpx;
  width: 100%;
  z-index: 9;
}

.product-bg .item .poster .image {
  width: 100%;
  height: 100%;
}

.product-bg .item .stop {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 136rpx;
  height: 136rpx;
  margin-top: -68rpx;
  margin-left: -68rpx;
  z-index: 9;
}

.product-bg .item .stop .image {
  width: 100%;
  height: 100%;
}
</style>
