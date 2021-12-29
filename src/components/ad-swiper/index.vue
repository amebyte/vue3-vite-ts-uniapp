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
import { PropType, ref, toRefs, defineComponent, reactive } from 'vue'
interface imgUrlsType {
  type: string
  src: string
}
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
  setup(props, {emit}) {
      let state = reactive({
          circular: true,
          autoplay: true,
          interval: 3000,
          duration: 500,
          currents: '1',
          controls: true
      })

    const bindPause = function () {
      state.autoplay = false
    }
    const change = (e) => {
      emit('update:current', e.detail.current)
      state.currents = e.detail.current + 1
    }
    const openLink = (i) => {
      emit('open', i)
    }

    const bindPlay = () => {
      state.autoplay = false
    }

    const bindEnd = () => {
      state.autoplay = true
    }

    const goToGoods = (link) => {
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
      goToGoods
    }
  }
})
</script>
