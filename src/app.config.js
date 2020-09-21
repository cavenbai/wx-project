export default {
  pages: [
    'pages/index/index',
    'pages/wiki/wiki',
    'pages/classroom/classroom',
    'pages/welfare/welfare',
    'pages/partake/partake',
    'pages/list/list'
  ],
  tabBar: {
    list: [{
      iconPath: 'static/images/a.png',
      selectedIconPath: 'static/images/b.png',
      pagePath: 'pages/index/index',
      text: '首页'
    },{
      iconPath: 'static/images/a.png',
      selectedIconPath: 'static/images/b.png',
      pagePath: 'pages/wiki/wiki',
      text: '百科'
    },{
      iconPath: 'static/images/a.png',
      selectedIconPath: 'static/images/b.png',
      pagePath: 'pages/classroom/classroom',
      text: '课堂'
    },{
      iconPath: 'static/images/a.png',
      selectedIconPath: 'static/images/b.png',
      pagePath: 'pages/welfare/welfare',
      text: '公益'
    },{
      iconPath: 'static/images/a.png',
      selectedIconPath: 'static/images/b.png',
      pagePath: 'pages/partake/partake',
      text: '参与'
    }],
    color: '#336fff',
    selectedColor: '#336FF',
    backgroundColor: '#F56C6C',
    borderStyle: 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
