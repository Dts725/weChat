// login.js
const updateManager = wx.getUpdateManager()
import url from '../../fetch.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
      flag : false,
      tokens : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.setStorageSync('1', 0)
    this.setData({
      tokens: wx.getStorageInfoSync('token')
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.isLogin()
  
  },

  //是否登录

  isLogin () {
    if (!wx.getStorageSync('isLogin')) {
      // wx.showToast({
      //   title: '请登录后操作!!',
      //   icon: 'none',
      // })
      // this.data.flag = false
      this.setData({
        flag : false
      })
    } else {
      // this.data.flag = true
      this.setData({
        flag: true
      })

    }
   
  },

  goToLogin() {
    wx.navigateTo({
      url: '../login',
    })
  },
  
  //进度查询
  routeProgress() {
    let _this =this


    if (_this.data.flag) {
      wx.navigateTo({
        url: '../progress/progressItem/progressItem',
      })
    } else {

      wx.showModal({
        title: '提示',
        content: '很抱歉，您暂未登录 !',
        success(res) {
          if (res.confirm) {
            _this.goToLogin()

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

  },

  //在线提问
  questionOnline () {
    
  },

  //我要吐槽
  complaintsMake  () {
    let _this =this;

    if(this.data.flag) {
      wx.navigateTo({
        url: '../complaintsMake/complaintsMake',
      })
    } else {

      wx.showModal({
        title: '提示',
        content: '很抱歉，您暂未登录 !',
        success(res) {
          if (res.confirm) {
            _this.goToLogin()
         
          } else if (res.cancel) {
         
          }
        }
      })

    }

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
    let _this = this
    if(this.data.flag) {
      wx.navigateTo({
        url: '../bid/firstStemp/firstStemp',
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '很抱歉，您暂未登录 !',
        success(res) {
          if (res.confirm) {
            _this.goToLogin()
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

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