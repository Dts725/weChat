// pages/progress/progressItem/progressItem.js
import url from '../../../fetch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataInfo : ""
  },
  routeProgressInfo (e) {
    console.log(e)
    wx.navigateTo({
      url: `../progress?detail=${JSON.stringify(e.currentTarget.dataset.parmas)}`,
    })
  },
  //获取页面数据
  getData() {
    let data = {
      token: wx.getStorageSync('token'),
      userid: wx.getStorageSync('userid').userid
    }
    wx.request({
      method: 'post',
      url: url.getBjProcessing,
      data: data,
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res => {
        if(res.data.res_data.state === 1) {
          this.setData({
            dataInfo: res.data.res_data.list
          })
        } else {
          wx.showToast({
            title: '您未登录或登录失效请重新登录',
            icon: 'none',
          })
          wx.navigateTo({
            url: '../../login',
          })
        }
 
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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