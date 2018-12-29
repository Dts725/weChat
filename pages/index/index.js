// login.js
const updateManager = wx.getUpdateManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // updateManager.onUpdateReady(function () {
    //   wx.showModal({
    //     title: '更新提示',
    //     content: '新版本已经准备好，是否重启应用？',
    //     success(res) {
    //       if (res.confirm) {
    //         // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
    //         updateManager.applyUpdate()
    //       }
    //     }
    //   })
    // })

    // updateManager.onUpdateFailed(function () {
    //   // 新版本下载失败
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  
  //进度查询
  routeProgress() {
    wx.navigateTo({
      url: '../progress/progressItem/progressItem',
    })
  },

  //在线提问
  questionOnline () {
    wx.navigateTo({
      url: '../problemOnline/problemOnline',
    })
  },

  //我要吐槽
  complaintsMake  () {
    wx.navigateTo({
      url: '../complaintsMake/complaintsMake',
    })
  },

  // 点击跳转
  storesReserve() {
    wx.navigateTo({
      url: '../storesReserve/storesReserve'
    })
  },
  pointsRead() {
    wx.navigateTo({
      url: '../pointsRead/pointsRead'
    })
  },
  politicalRules() {
    wx.navigateTo({
      url: '../politicalRules/politicalRules'
    })
  },
  problemCommon() {
    wx.navigateTo({
      url: '../problemCommon/problemCommon'
    })
  },
  //我要申办
  routeBid() {
    wx.navigateTo({
      url: '../bid/firstStemp/firstStemp',
    })
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