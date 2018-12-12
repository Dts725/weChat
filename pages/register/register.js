// pages/register/register.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name : "",
      idCard : "",
      pwd: "",
      mobile : ''
  },
//跳转登录
login() {
  wx.navigateTo({
    url: '../login',
  })
},
// 获取姓名
  getName(e) {

    this.data.name=e.detail.value
  },
  //获取idcard
  getIdCard(e) {
    this.data.idCard = e.detail.value
  },
  //获取密码
  getPwd (e) {
    this.data.pwd = e.detail.value
  },
  //获取手机号
  getPhone (e) {
    this.data.mobile = e.detail.value
  },
//注册
  register () {
    wx.request({
      url: app.globalData.registerUrl,
      data : {
        method: 'tjkfqExchange.tjoa.register',
        loginName : this.data.name,
        mobile : this.data.mobile,
        pwd : this.data.pwd,
        idCard: this.data.idCard



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