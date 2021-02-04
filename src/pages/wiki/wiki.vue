<template>
  <view class="wiki">
    <view>法国发过绘画风格</view>
    <van-datetime-picker
      v-model="currentTime"
      type="time"
      title="选择年月日"
      :min-hour="10"
      :max-hour="20"
    />
  </view>
</template>

<script>

export default {
  name: 'Wiki',
  data() {
    return {
      currentTime: '12:00',
      show: true
    };
  }
}
</script>

<style lang="scss">

</style>
