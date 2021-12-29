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
import { fetchUserInfo } from '@/api/user'
const title = ref('购物车')
const store = useStore()
const setToken = () => {
  store.dispatch(AppActionTypes.ACTION_LOGIN, 'token')
  title.value = store.state.app.token
}
fetchUserInfo()
  .then((r) => {
    console.log('r', r)
  })
  .catch((err) => console.log(err))
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
