// pages/bid/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adItems: [{
        name: '1',
        value: '经营性'
      },
      {
        name: '2',
        value: '公益性'
      }
    ],
    property: [{
        name: '租赁',
        value: 1
      },
      {
        name: '非租赁',
        value: 2
      }
    ],
    propertyValue: '', //产权类型
    flag: true, //租赁状态
    bindDateChangeValue: "",//开始时间
    bindDateChangeEndValue:"",//结束时间

  },


  bindPickerChange(e) {
    if(e.detail.value == 1) {
      this.setData({
        flag : false,
        propertyValue: this.data.property[e.detail.value].name
      })
    } else {
  
      this.setData({
        flag: true,
        propertyValue: this.data.property[e.detail.value].name
      })
    }

  },

  //开始时间

  bindDateChange (e) {
    this.setData({
      bindDateChangeValue : e.detail.value
    })
  },
  bindDateChangeEnd (e) {
    this.setData({
      bindDateChangeEndValue : e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})