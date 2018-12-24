// pages/bid/firstStemp/firstStemp.js
import url from '../../../fetch.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idType: [{
        name: '企业营业执照',
        value: 22,
      },
      {
        name: '组织机构代码',
        value: 21,
      },
      {
        name: '法人身份证',
        value: 23,
      },
      {
        name: '税务登记证',
        value: 24,
      },
      {
        name: '其他',
        value: 25,
      },
    ],
    idTypeValue: "",
    value: '',
    data: {
      sxid: 'd7009bfd880e4a06bd410d68639ee76f', // 事项id, d7009bfd880e4a06bd410d68639ee76f  为户外广告及夜景灯光设施设置与变动许可（A类：户外广告设施许可
      userid: '', //登录成功后返回的  账号id（userid）
      token: '', //获取的有效token
      fr_name: '', //单位名称
      fr_zjlx: '', //证件类型22身份证、21组织机构代码、23法人身份证、24税务登记证、25其他
      fr_zjnum: '', //证件号码
      fr_address: '', //联系地址
      fr_zone: '', // 邮政编码
      fr_lxr: '', //联系人
      fr_lxdh: '', //法人联系电话
      fr_frdb: '', //法人代表
      token: ''
    }

  },

  //获取单位名称
  getFrName(e) {
    this.data.data.fr_name = e.detail.value;
  },

  //获取联系人
  getFrxr(e) {
    this.data.data.fr_lxr = e.detail.value;
  },

  //获取联系方式
  fr_lxdh(e) {
    this.data.data.fr_lxdh = e.detail.value;
  },

  //获取法人代表
  fr_frdb(e) {
    this.data.data.fr_frdb = e.detail.value;
  },

  //获取法人身份证号
  fr_zjnum(e) {
    this.data.data.fr_zjnum = e.detail.value;
  },

  //联系地址
  fr_address(e) {
    this.data.data.fr_address = e.detail.value;
  },

  //邮政编码
  fr_zone(e) {
    this.data.data.fr_zone = e.detail.value;
  },

  submit() {
    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      method: 'post',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      url: url.submitApplicantBaseInfo,
      data: this.data.data,
      success: res => {
        wx.hideLoading()
        if (res.data.res_data.state == 1) {
          app.globalData.getMaterials = res.data.res_data;
          wx.navigateTo({
            url: `../../bid/bid`,
          })
        }
      }
    })




  },
  // submit () {
  //   // let formData = new FormData();
  //   // let data = formData(this.data.data)
  //   wx.request({
  //     method:'post',
  // header: {
  //   "content-type": "application/x-www-form-urlencoded"
  // },
  //     url: url.submitApplicantBaseInfo,
  //     data: this.data.data,
  //     success : res => {
  //         console.log(res)
  //     }
  //   })

  // },

  bindPickerChange(e) {
    this.data.data.fr_zjlx = this.data.idType[e.detail.value].value;
    this.setData({
      value: this.data.idType[e.detail.value].name,
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
  onLoad: function(options) {
    this.data.data.userid = wx.getStorageSync('userid').userid;
    this.data.data.token = wx.getStorageSync('token');

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