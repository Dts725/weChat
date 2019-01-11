// pages/component/HandInfo/HandInfo.js
Component({
  /**
   * 组件的属性列表
   */


  properties: {

    bjInfoData: {
      type: Object,
      value: '',

      observer(newVal, oldVal, changedPath) {
       
        if(newVal) {
          this.setData({
            bjInfo: newVal.zt,
            bjInfoProgress: newVal.history
          }
          )
        }
      }
    }
  },

  lifetimes: {
    ready() {
      // console.log(this.data.bjInfoData)

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bjInfo : {},
    flag: true,
    bjClass: 'info-top',
    progressClass: 'process-bottom'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _bjInfo() {
      this.setData({
        flag: true,
        bjClass: 'info-top',
        progressClass: 'process-bottom'
      })
    },
    _bjProgress() {
      this.setData({
        bjClass: 'info-top02',
        progressClass: 'process-bottom02',
        flag: false
      })
    }
  }
})