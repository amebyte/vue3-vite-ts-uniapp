<template>
  <view class="container">
    <view class="header">
      <view class="content"></view>
    </view>
    <!--头像和用户信息 start-->
    <view class="user-info-header" style="">
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
      <view class="setup"><text class="txt">等级规则</text></view>
    </view>
    <!--头像和用户信息 end-->
    <!--会员级别 start-->
    <view class="member-level">
      <view class="title">会员级别</view>
      <view class="bottom">
        <view class="growth-value"><text class="num">0</text> 成长值</view>
        <view class="line"></view>
        <view class="level-desc">当前是初级等级</view>
      </view>
      <view class="bg-image"><image src="../../static/images/skip/vip.png" /></view>
    </view>
    <!--会员级别 end-->
    <!--特惠标题 start-->
    <view class="preferential-title">会员专享特惠商品</view>
    <!--特惠标题 end-->
    <!--特惠商品列表 start-->
    <ProductListGrid />
    <!--特惠商品列表 end-->
  </view>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import ProductListGrid from '@/components/product-list-grid/index.vue'
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
</script>
<style lang="scss">
@import '@/static/css/variable.scss';
page {
  background-color: $background-color;
}
</style>
<style lang="scss">
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
        background-color: #102c24;
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
    .setup {
      position: absolute;
      top: 70rpx;
      right: 40rpx;
      color: #fff;
      .txt {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: bold;
        text-decoration: underline;
        color: #23ad77;
        line-height: 0px;
      }
    }
  }
  .member-level {
    position: relative;
    margin-left: 20rpx;
    margin-right: 20rpx;
    height: 369rpx;
    background: linear-gradient(0deg, #2fb383 0%, #18a86b 100%);
    border-radius: 20rpx;
    padding: 40rpx;
    overflow: hidden;
    .title {
      font-size: 32rpx;
      font-family: PingFang SC;
      font-weight: 400;
      color: #fcb81d;
    }
    .bottom {
      margin-top: 100rpx;
      .growth-value {
        font-size: 40rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
        .num {
          font-size: 50rpx;
        }
      }
      .line {
        height: 3rpx;
        background: #ffffff;
        border-radius: 1rpx;
        margin-top: 20rpx;
        margin-bottom: 20rpx;
      }
      .level-desc {
        font-size: 24rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .bg-image {
      position: absolute;
      bottom: -80rpx;
      right: -100rpx;
      image {
        width: 325rpx;
        height: 306rpx;
        opacity: 0.3;
      }
    }
  }
  .preferential-title {
    text-align: center;
    font-size: 32rpx;
    font-family: PingFang SC;
    font-weight: 600;
    color: #1aa86c;
    margin-top: 40rpx;
    margin-bottom: 40rpx;
  }
}
</style>
