// pages/bid/firstStemp/firstStemp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idType : [
      {
      name : '企业营业执照',
      value : 1,
    },
      {
      name : '组织机构代码',
      value : 2,
    },
      {
      name : '法人身份证',
      value : 3,
    },
      {
      name : '税务登记证',
      value : 4,
    },
      {
      name : '其他',
      value : 5,
    },
    ],
    idTypeValue : "",
    value : ''

  },

  bindPickerChange(e) {
    console.log(e)
    this.setData({
      value: this.data.idType[e.detail.value].name
    })
  },
back() {
  wx.navigateBack({
    
  })
},
next() {
  wx.navigateTo({
    url: '../edit/edit',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})