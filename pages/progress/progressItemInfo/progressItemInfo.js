// pages/progress/progressItem/progressItem.js
import url from '../../../fetch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
    bjTopData : {}
  },
  routeProgressInfo(e) {
    
    // wx.navigateTo({
    //   url: `../progress?detail=${JSON.stringify(e.currentTarget.dataset.parmas)}`,
    // })
  },

  //办件事项
  bjTop (e) {
 
    this.setData({
      bjTopData : e
    })

  },
  

  //获取页面数据
  getData(e) {
    let _this =this;
    let data = {
      token: wx.getStorageSync('token'),
      bjid: e.bj_id
    }
    wx.request({
      url: url.viewBJBZInfoAndMaterials,
      data: data,
      // header: {
      //   "content-type": "application/x-www-form-urlencoded"
      // },
      success: res => {
   
        if (res.data.res_data.state === 1) {
          _this.setData({
            dataInfo: res.data.res_data,

            bjTopData: res.data.res_data.bjinfo
          })

          console.log(_this.data.dataInfo)
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

    // this.bjTop(JSON.parse(options.detail))
    this.getData(JSON.parse(options.detail));

  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.getData();
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