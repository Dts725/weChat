// pages/component/HandlingStatus/HandlingStatus.js
Component({
  /**
   * 组件的属性列表
   */
 
  properties: {
    bjTopData : Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes : {

    ready () {
      switch (this.data.bjTopData.ywsx_state) {
        case 12 : {
          this.setData({
            submitData : '提交'
          })
        };
        case 13 : {
          this.setData({
            submitData : '预审补证'
          })
        };
        case 14 : {
          this.setData({
            submitData : '预审通过'
          })
        };
        case 20 : {
          this.setData({
            submitData : '授理通过'
          })
        };
        case 21 : {
          this.setData({
            submitData : '审查'
          })
        };
        case 23 : {
          this.setData({
            submitData : '退件审批'
          })
        };
        case 24 : {
          this.setData({
            submitData : '废件审批'
          })
        };
        case 31 : {
          this.setData({
            submitData : '补证'
          })
        };
        case 32 : {
          this.setData({
            submitData : '特别程序'
          })
        };
        case 34 : {
          this.setData({
            submitData : '上报'
          })
        };
        case 35 : {
          this.setData({
            submitData : '上报通过'
          })
        };
        case 45 : {
          this.setData({
            submitData : '办结'
          })
        };
        default : {
          this.setData({
            submitData: '预审'
          })
          break
        }
      }
     
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
