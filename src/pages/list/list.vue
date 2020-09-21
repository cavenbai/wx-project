<template>
  <view class="list">
    <view>列表弹窗</view>
  </view>
</template>

<script>
  import { getCurrentInstance } from '@tarojs/taro'
  import { coursesList } from '../../apis'
  export default {
    name: 'List',
    mounted() {
      console.log(getCurrentInstance().router.params)
      const params = { page_num: 1, page_size: 4, show_position: 2 };
      coursesList(params).then(res => {
        console.log(res, 898989898)
      })
    }
  }
</script>

<style lang="scss">
  .list {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
