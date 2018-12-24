// pages/register/register.js
import url from '../../fetch.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      registerInfo : {
        loginName: "",
        xm : "",
        idCard: "",
        pwd: "",
        mobile: '',
      }
  },
//跳转登录
login() {
  wx.navigateTo({
    url: '../login',
  })
},
// 获取姓名
  getName(e) {

    this.data.registerInfo.loginName=e.detail.value
  },

  //获取单位名
  getXmName(e){
    this.data.registerInfo.xm = e.detail.value


  },

  //获取idcard
  getIdCard(e) {
    this.data.registerInfo.idCard = e.detail.value
  },
  //获取密码
  getPwd (e) {
    this.data.registerInfo.pwd = e.detail.value
  },
  //获取手机号
  getPhone (e) {
    this.data.registerInfo.mobile = e.detail.value
  },
//注册
  register () {
    // this.data.registerInfo.token = app.globalData.token;
    wx.request({
      url: url.registerUrl,
      data: this.data.registerInfo,
      success : res => {
        switch(res.data.res_data.state){
          case 0: {
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 2000
            })
            this.login()
          }
          case 1: {
            wx.showToast({
              title: 'token失效',
              icon: 'none',
              duration: 2000
            })
          }
          case 2: {
            wx.showToast({
              title: '已注册',
              icon: 'none',
              duration: 2000
            })
          }
          case 3: {
            wx.showToast({
              title: '手机号错误',
              icon: 'none',
              duration: 2000
            })
          }
        }
      }
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