<template>
  <view class="container">
    <view class="header">
      <view class="content"></view>
    </view>
    <!--头像和用户信息 start-->
    <view class="user-info-header" style="">
      <block v-if="isLogin">
        <view class="user-avatar" @click="toPage('/pages/my/edit')">
          <image :src="userInfo.pic" />
        </view>
        <view class="user-right">
          <view class="user-right-top">
            <text class="username">{{ userInfo.nickName }}</text>
            <view class="user-level"
              >{{ userInfo.memberLevelVO ? userInfo.memberLevelVO : 'LV0' }}
              <text class="iconfont icon-arrow-right-bold"></text
            ></view>
            <view class="user-person">个人认证</view>
          </view>
          <view class="user-right-bottom">
            <view v-if="userInfo.userMobile">{{ userInfo.userMobile || '' }}</view>
            <view v-else @click="toPage('/pages/my/setMobile')">设置手机号码</view>
          </view>
        </view>
      </block>
      <block v-else>
        <view class="user-avatar" @click="goLogin">
          <image src="../../static/images/meviky/un-sign-in-header.svg" />
        </view>
        <view class="user-right">
          <view class="user-right-top" @click="goLogin">
            <text class="username">授权登录</text>
          </view>
          <view class="user-right-bottom" @click="goLogin">授权登录之后享受更多优惠福利</view>
        </view>
      </block>
    </view>
    <!--头像和用户信息 end-->
    <!--会员中心入口 start-->
    <view class="member-center">
      <view class="image"><image src="../../static/images/skip/vip.png" /></view>
      <view class="desc">只有会员才知道的世界</view>
      <view class="action"><text>进入</text></view>
    </view>
    <!--会员中心入口 end-->
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
let isLogin = ref(true)
let userInfo = reactive({
  pic: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ8SiagBMUuLZ7USibVCmnJBvy87ib8gT8gl1wrCwwZRVDsv9a6t4lbGLHcoiacKDxjvgw0v374xE3UkQ/132',
  nickName: 'coboy',
  memberLevelVO: 'Lv1',
  userMobile: '1382550699x',
})
const toPage = (path) => {
  console.log('toPage')
}
const goLogin = () => {
  console.log('goLogin')
}
</script>
<style lang="scss">
@import '@/static/css/variable.scss';
page {
  background-color: $background-color;
}
</style>
<style lang="scss" scoped>
@import '@/static/css/variable.scss';
.container {
  .header {
    position: absolute;
    width: 100%;
    margin: auto;
    overflow: hidden;

    .content {
      position: relative;
      width: 100%;
      height: 246rpx;
      text-align: center;
      line-height: 100rpx;

      &::after {
        width: 140%;
        height: 246rpx;
        position: absolute;
        left: -20%;
        top: 0;
        z-index: -1;
        content: '';
        border-radius: 0 0 50% 50%;
        background-color: $top-background-color;
      }
    }
  }

  .user-info-header {
    position: relative;
    display: flex;
    padding: 22rpx;
    height: 246rpx;
    overflow: hidden;
    padding-top: 30rpx;

    .user-avatar {
      image {
        width: 120rpx;
        height: 120rpx;
        border-radius: 50%;
      }
    }

    .user-top-icon {
      position: absolute;
      right: 0;
      bottom: -87rpx;
      width: 320rpx;
    }

    .user-right {
      display: flex;
      flex-direction: column;
      align-items: left;
      padding-left: 20rpx;
      margin-top: 17rpx;

      .user-right-top {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 40rpx;
        line-height: 40rpx;
        margin-bottom: 10rpx;

        .username {
          font-size: 35rpx;
          padding-right: 6rpx;
          color: #fff;
        }

        .user-level {
          height: 30rpx;
          line-height: 30rpx;
          font-size: 20rpx;
          background-color: #e7e7e7;
          border-radius: 10rpx;
          padding-left: 10rpx;
          padding-right: 10rpx;
          margin-right: 6px;
          color: #f33333;

          .iconfont {
            font-size: 15rpx;
          }
        }

        .user-person {
          height: 30rpx;
          line-height: 30rpx;
          font-size: 20rpx;
          background-color: #ffcc00;
          border-radius: 10rpx;
          padding-left: 10rpx;
          padding-right: 10rpx;
          color: #f33333;

          .iconfont {
            font-size: 15rpx;
          }
        }
      }

      .user-right-bottom {
        color: #fff;
        opacity: 0.7;
      }
    }
  }
  .member-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20rpx;
    margin-right: 20rpx;

    background: #00342e;
    border: 3px solid #ffffff;
    box-shadow: 0px 0px 14rpx 6rpx rgba(29, 233, 182, 0.11);
    border-radius: 20rpx;
    padding: 20rpx;
    height: 120rpx;
    .image {
      position: relative;
      image {
        position: absolute;
        top: -65rpx;
        width: 103rpx;
        height: 93rpx;
      }
    }
    .desc {
      font-size: 28rpx;
      font-family: PingFang SC;
      font-weight: 400;
      color: #fcb81d;
    }
    .action {
      text {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #00342e;
        background-color: #fcb81d;
        border-radius: 27rpx;
        padding: 10rpx 30rpx;
      }
    }
  }
}
</style>
