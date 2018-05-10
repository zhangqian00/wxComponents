Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: { 
    navbarTitle: {
      type: Array,
      value: ['选项一','选项二','选项三'] // 默认值
    }
  },
  data: {
    activeIndex: 0
  },
  methods: {
    change: function(e){
      this.setData({
        activeIndex: e.currentTarget.dataset.index
      });
    }
  }
})