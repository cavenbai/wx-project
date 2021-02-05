<template>
  <view class="index">
    <NumberDisplay/>
    <NumberSubmit/>
    <button @tap="go">跳转tabBar wiki</button>
    <button @tap="gobar">跳转非tabBar</button>
    <van-button type="primary">主要按钮</van-button>
    <van-button loading type="primary" />
    <van-button loading type="primary" loading-type="spinner" />
    <van-button loading type="info" loading-text="加载中..." />
    <AtButton loading type='primary'>按钮文案</AtButton>
    <AtInput
      name='value1'
      title='标准五个字'
      type='text'
      placeholder='标准五个字'
      :value="value1"
      :onChange="handleInput"
    />
    <AtBadge :value="10" :maxValue="99">
      <AtButton size='small'>按钮</AtButton>
    </AtBadge>
  </view>
</template>

<script>
import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'
import Taro from '@tarojs/taro'
import { AtButton, AtInput, AtBadge } from 'taro-ui-vue'

export default {
  name: 'Index',
  components: {
    NumberDisplay,
    NumberSubmit,
    AtButton,
    AtInput,
    AtBadge
  },
  data() {
    return {
      value1: '',
    }
  },
  methods: {
    go() {
      Taro.switchTab({url: '/pages/wiki/wiki'}) // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    },
    gobar() {
      Taro.navigateTo({url: '/pages/list/list?id=2&type=test'})
    },
    handleInput(val) {
      this.value1 = val
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
