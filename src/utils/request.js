import Taro from '@tarojs/taro';
const baseUrl = 'https://edu-test.megyueying.com';

export default (options = { method: 'GET', data: {}, url: '' }) => {
  Taro.showLoading({title: '加载中', mask: true})
  return Taro.request({
    isShowLoading: true,
    loadingText: '正在加载',
    url: baseUrl + options.url,
    data: { ...options.data },
    header: { 'Content-Type': 'application/json' },
    method: options.method.toUpperCase(),
  }).then(res => {
    console.log(res, 7987)
    Taro.hideLoading()
    if (res.statusCode === 200) {
      return res.data;
    } else {
      throw new Error(`网络请求错误`);
    }
  })
}
