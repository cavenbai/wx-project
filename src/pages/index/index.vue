<template>
  <view class="index">
    <NumberDisplay/>
    <NumberSubmit/>
    <button @tap="go">跳转tabBar wiki</button>
    <button @tap="gobar">跳转非tabBar</button>
  </view>
</template>

<script>
import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'
import Taro from '@tarojs/taro'

export default {
  name: 'Index',
  components: {
    NumberDisplay,
    NumberSubmit
  },
  methods: {
    go() {
      Taro.switchTab({url: '/pages/wiki/wiki'}) // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    },
    gobar() {
      Taro.navigateTo({url: '/pages/list/list?id=2&type=test'})
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
