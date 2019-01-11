// pages/component/progress/progress.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    progressData : Object
  },

  // 组建神生命周期

  lifetimes : {
    ready () {
      console.log(this.data.progressData)
     let num = this._init(this.data.progressData.ywsx_state)
      this.setData({
        process : num
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    _init(n) {
      let data = 0
      switch (n) {
        case n >= 14:
          data = 0
          break;
        case n >= 23:
          data = 1
          break;
        case n >= 31:
          data = 2
          break;
        case n >= 35:
          data = 3
          break;
        case 45:
          data = 4
          break;
        default:

      }

      return data
    },

  }
})
