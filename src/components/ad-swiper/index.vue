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
            <!-- <view class="poster" v-if="controls">
                			<image class="image" :src="imgUrls[0].src"></image>
                		</view> -->
            <!-- <view class="stop" v-if="controls" @tap="bindPause">
                			<image class="image" src="../../static/images/stop.png"></image>
                		</view> -->
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
import { PropType, defineComponent } from 'vue'
interface imgUrlsType {
  type: string
  src: string
}
export default defineComponent({
  name: 'AdSwiper',
  props: {
    imgUrls: {
      type: Array as PropType<Array<imgUrlsType>>,
      default: function () {
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
  data() {
    return {
      circular: true,
      autoplay: true,
      interval: 3000,
      duration: 500,
      currents: '1',
      controls: true,
    }
  },
  methods: {
    bindPause: function () {
      // this.videoContext.play();
      // this.$set(this, 'controls', false)
      this.autoplay = false
    },
    change(e) {
      this.$emit('update:current', e.detail.current)
      this.$set(this, 'currents', e.detail.current + 1)
    },
    openLink(i) {
      this.$emit('open', i)
    },

    bindPlay() {
      this.autoplay = false
    },

    bindEnd() {
      this.autoplay = true
    },

    goToGoods(link) {
      if (link) {
        uni.navigateTo({
          url: link,
        })
      }
    },
  },
})
</script>
