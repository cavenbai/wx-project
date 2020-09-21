import Taro from '@tarojs/taro';
const baseUrl = 'https://edu-test.megyueying.com';

export default (options = { method: 'GET', data: {}, url: '' }) => {
  return Taro.request({
    url: baseUrl + options.url,
    data: { ...options.data },
    header: { 'Content-Type': 'application/json' },
    method: options.method.toUpperCase(),
  }).then(res => {
    console.log(res, 7987)
    if (res.statusCode === 200) {
      return res.data;
    } else {
      throw new Error(`网络请求错误`);
    }
  })
}
