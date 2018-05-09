Component({
  // 组件属性列表
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    tabTitle: {
      type: Array,
      value: ['One','Two','Three'] // 默认值
    }
  },
  data: {
    // 这里是一些组件内部数据
    tabIndex: 0
  },
  // 组件方法列表
  methods: {
    tabToggle: function(e){
      if(this.data.tabIndex === e.target.dataset.index){
        return;
      }
      this.setData({
        tabIndex: e.target.dataset.index
      });
    },
    swiperChange: function(e){
      this.setData({
        tabIndex: e.detail.current
      })
      console.log(e)
    }
  }
})