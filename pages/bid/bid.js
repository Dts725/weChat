// pages/bid/bid.js
import url from '../../fetch.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryData: {
      sxid: "",
      bjid: ""
    },
    uploadFileInfo: '',
    img0 : '',//图片和上个页面返回id 相关
    img1 : "",
    img2 : "",
    img3 : "",
    img4 : "",
    img5 : "",
    img6 : "",
    img7 : "",
    img8 : "",
    img9 : "",
  },


  //截取图片地址
  getImgUrl(str, fid, name,value) {
    let index = str.indexOf('webapps');
    console.log(str.substr(index + 7))
    let imgUrl = url.imgUrl + str.substr(index + 7) + '/' + fid + name
  
    console.log(imgUrl)
    switch(value){
      case '0' : 
      {
        this.setData({
          img0 : imgUrl
        })
        this.steStroge('img0',imgUrl)
        break;
      }
      case '1' : 
      {
        this.setData({
          img1 : imgUrl
        })
          this.steStroge('img1', imgUrl)
          break;

      }
      case '2' : 
      {
        this.setData({
          img2 : imgUrl
        })
          this.steStroge('img2', imgUrl)
          break;

      }
      case '3' : 
      {
        this.setData({
          img3 : imgUrl
        })
          this.steStroge('img3', imgUrl)
          break;

      }
      case '4' : 
      {
        this.setData({
          img4 : imgUrl
        })
          this.steStroge('img4', imgUrl)
          break;

      }
      case '5' : 
      {
        this.setData({
          img5 : imgUrl
        })
          this.steStroge('img5', imgUrl)
          break;

      }
      case '6' : 
      {
        this.setData({
          img6 : imgUrl
        })
          this.steStroge('img6', imgUrl)
          break;

      }
      case '7' : 
      {
        this.setData({
          img7 : imgUrl
        })
          this.steStroge('img7', imgUrl)
          break;

      }
      case '8' : 
      {
        this.setData({
          img8 : imgUrl
        })
          this.steStroge('img8', imgUrl)
          break;

      }
      case '9' : 
      {
        this.setData({
          img9 : imgUrl
        })
          this.steStroge('img9', imgUrl)
          break;

      }

      default: {
        break;
      }
    }
  },

  //下载模板
  download(){


    wx.downloadFile({
      url: url.downLoad, 
  
      success: function (res) {
        var filePath = res.tempFilePath;
        console.log(res);
        wx.openDocument({
          filePath: filePath,
          fileType : 'doc',
          success: function (res) {
            console.log('打开文档成功')
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        })
      },
      fail: function (res) {
        console.log('文件下载失败');
      },
      complete: function (res) { },
    })
  },


  //上传图片接口
  uploadFn1(e) {
    let user_id = wx.getStorageSync('userid').userid;
    let object_id = wx.getStorageSync('uploadInfo')[e.currentTarget.dataset.tap].id
    let str = `&user_id=${user_id}&object_id=${object_id}`
    // console.log(str)
    let _this = this;

    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: url.fileuploadSqcl + str,
          filePath: tempFilePaths[0],
          name: 'file',

          success(res) {
            let obj = JSON.parse(res.data);
        
            _this.getImgUrl(obj.savePath, obj.fid, obj.endName, e.currentTarget.dataset.tap);
            app.globalData.fid[e.currentTarget.dataset.tap] = obj.fid;

          }
        })
      }
    })

  },

  //数据本地存储

    steStroge(key,data) {
        wx.setStorageSync(key, data)
    },
    //获取本地数据

    getStroge(key) {
    return  wx.getStorageSync(key) 
    },
    //移除strog 

    remStroge(key) {
      wx.removeStorageSync(key)
    },

  //上传查询列表
  getMaterials() {


    wx.request({
      url: url.getMaterials,
      data: this.data.queryData,
      success: res => {
        if (res.data.res_data.state == 0) {
          wx.showToast({
            title: '您未登录或登录失效请重新登录',
            icon: 'none',
          })
          wx.navigateTo({
            url: '../login',
          })
        } else {
          this.data.uploadFileInfo = res.data.res_data.materials
          wx.setStorageSync('uploadInfo', this.data.uploadFileInfo)
        }
      }
    })
  },

  //提交申请材料
  submit () {
    let _this = this;
    wx.showLoading({
      title: '加载中',
    })
    let data = {
      token: wx.getStorageSync('token'),
      userid: wx.getStorageSync('userid').userid,
      bjid: app.globalData.getMaterials.bjid,
      matterid: 'd7009bfd880e4a06bd410d68639ee76f',
      des : ""
    }
    wx.request({
      url: url.submitMaterials,
      method : 'get',
      data : data,
      // header: {
      //   "content-type": "application/x-www-form-urlencoded"
      // },
      success : res => {
        wx.hideLoading()

          if(res.data.res_data.state ===1) {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
            wx.navigateTo({
              url: '../index/index',
            })
          } else {
            if (res.data.res_data.state === 0) {
              wx.showToast({
                title: 'token校验失败',
                icon: 'none',
                duration: 2000
              })
              wx.navigateTo({
                url: '../login',
              })
            }
          }
      }
    })
  },

  back () {
    wx.reLaunch({
      url: './firstStemp/firstStemp',
    })
  },

  //点击分享
  share(){
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  promise() {
    wx.showShareMenu({
      withShareTicket: true,
      success : res => {
        console.log('成功了')
      },
      fail :  err => {
        console.log('失败了')
      }
    })
    // wx.navigateTo({
    //   url: './promise/promise',
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.queryData.sxid = app.globalData.getMaterials.sxid;
    this.data.queryData.bjid = app.globalData.getMaterials.bjid;
    this.data.queryData.token = wx.getStorageSync('token');
      console.log(options)
    if(options.edit === '1') {
      this.setData({
        img0: this.getStroge('img0'),
        img1: this.getStroge('img1'),
        img2: this.getStroge('img2'),
        img3: this.getStroge('img3'),
        img4: this.getStroge('img4'),
        img5: this.getStroge('img5'),
        img6: this.getStroge('img6'),
        img7: this.getStroge('img7'),
        img8: this.getStroge('img8'),
        img9: this.getStroge('img9')
      })
    } else {
      this.remStroge('img0')
      this.remStroge('img1')
      this.remStroge('img2')
      this.remStroge('img3')
      this.remStroge('img4')
      this.remStroge('img5')
      this.remStroge('img6')
      this.remStroge('img7')
      this.remStroge('img8')
      this.remStroge('img9')
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getMaterials();

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  application() {
    wx.reLaunch({
      url: './edit/edit',
    })
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