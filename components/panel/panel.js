Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerData: {
      type: Array,
      value: [{
        title: '标题1标题1标题1',
        imgUrl: '../../images/wx.jpg',
        info: '文章摘要，文章摘要，文章摘要，文章摘要，文章摘要，文章摘要。'
      }, {
        title: '标题2标题2标题2',
        imgUrl: '../../images/wx.jpg',
        info: '文章摘要，文章摘要，文章摘要，文章摘要，文章摘要，文章摘要。'
      }],
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})