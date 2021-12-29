<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
      <view @click="setToken">login</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppActionTypes } from '@/store/modules/app/action-types'
import { useStore } from 'vuex'
const title = ref('会员中心')
const store = useStore()
const setToken = () => {
  store.dispatch(AppActionTypes.ACTION_LOGIN, 'token')
  title.value = store.state.app.token
}
</script>

<style lang="scss">
$link-color: red;
a {
  color: $link-color;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
