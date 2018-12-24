// pages/bid/bid.js
import url from '../../fetch.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      queryData : {
        sxid :"",
        bjid : ""
      },
      uploadFileInfo: ''
  },
  

  //上传图片接口
  uploadFn1(index){
    let _this = this;
    console.log(this.data.uploadFileInfo)
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: url.fileuploadSqcl,
          filePath: tempFilePaths[0],
          name: 'file',
          formData: _this.data.uploadFileInfo[index].id,
          success(res) {
              console.dir(res)
            // do something
          }
        })
      }
    })

  },

  //上传查询列表
  getMaterials(){
    wx.request({
      url: url.getMaterials,
      data : this.data.queryData,
      success : res => {
          if(res.data.res_data.state == 0) {
            wx.showToast({
              title: 'token校验失败',
              success : 'none',
            })
          } else {
            this.data.uploadFileInfo = res.data.res_data.materials
            wx.setStorageSync('uploadInfo', this.data.uploadFileInfo)
          }
      }
    })
  },

  promise() {
    wx.navigateTo({
      url: './promise/promise',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.queryData.sxid = app.globalData.getMaterials.sxid;
    this.data.queryData.bjid = app.globalData.getMaterials.bjid;
    this.getMaterials();
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
  application(){
    wx.navigateTo({
      url: './edit/edit',
    })
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