// pages/progress/progressItem/progressItem.js
import url from '../../../fetch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

    bjTopData: {},
    viewFlag: true
  },
  routeProgressInfo(e) {

    // wx.navigateTo({
    //   url: `../progress?detail=${JSON.stringify(e.currentTarget.dataset.parmas)}`,
    // })
  },

  //办件事项
  bjTop(e) {

    this.setData({
      bjTopData: e
    })

  },

  //是否显示详细信息
  onMyFlag(el) {
    if (el.detail) {

      this.setData({
        viewFlag: false,
      })
    } else {

      this.setData({
        viewFlag: true,
      })
    }


  },


  // 查看
  view(e) {
    let index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id;

    console.log(id)
    console.log(index)
    if (index === 0) {
      this.getBjForm(id)
    } else {
      this.getBjInfo(id)
    }

  },

  // 编辑
  edit(e) {
    let id = e.currentTarget.dataset.id;

    let index = e.currentTarget.dataset.index;

    if (index === 0) {
      this.getBjFormEdit(id)
    } else {

      this.getBjInfoEdit(id)
    }

  },

  //查看表单信息详情
  getBjForm(id) {
    // let id = e.currentTarget.dataset.id;
    wx.request({
      url: url.getBjInfo,
      // url: url.getBjInfo,
      data: {
        clid: id
      },
      method: 'GET',
      success: res => {
        console.log(res.data.res_data)
        wx.navigateTo({
          url: `../../bid/edit/edit?data=${JSON.stringify(res.data.res_data)}&view=true`,

        })
      }
    })
  },
  //编辑表单详情
  getBjFormEdit(id) {
    // let id = e.currentTarget.dataset.id;
    wx.request({
      url: url.getBjInfo,
      // url: url.getBjInfo,
      data: {
        clid: id
      },
      method: 'GET',
      success: res => {
        wx.navigateTo({
          url: `../../bid/edit/edit?data=${JSON.stringify(res.data.res_data)}& view= false`,

        })
      }
    })
  },
  //查看附件
  getBjInfo(id) {
    // let id = e.currentTarget.dataset.id;

    wx.request({
      url: url.getBjInfoFiled,
      // url: url.getBjInfo,
      data: {
        clid: id
      },
      method: 'GET',
      success: res => {
        console.log(res)
        if (!res.data.res_data.list.length) {


          wx.showToast({
            title: '您未上传附件 ! ! !',
            icon: 'none'
          })
          return
        }
        wx.previewImage({
          current: url.retutnUrl + `?id=${res.data.res_data.list[0].id}`, // 当前显示图片的http链接
          urls: [url.retutnUrl + `?id=${res.data.res_data.list[0].id}`] // 需要预览的图片http链接列表
        })


      }
    })
  },





  // 编辑附件
  getBjInfoEdit(id) {
    //  删除附件
    // url.deleteField(id)

    console.log('怎么可以不哈奥的啊大大哈沙德')
    //上传附件
    wx.request({
      url: url.getBjInfoFiled,

      data: {
        clid: id
      },
      method: 'GET',
      success: res => {

        if (res.data.res_data.list.length) {
          url.deleteField(res.data.res_data.list[0].id)
          console.log(res.data.res_data.list[0].id)
        }

        wx.chooseImage({
          success(res) {
            const tempFilePaths = res.tempFilePaths
            wx.uploadFile({
              url: url.fileuploadSqcl + `&object_id=${id}`, // 仅为示例，非真实的接口地址

              filePath: tempFilePaths[0],
              name: 'file',
              success: (res) => {
                console.log(res)
              }
            })
          }
        })
      }
    })
  },

  // 提交按钮 
  submitEdit() {
    let data = {
      token: wx.getStorageSync('token'),
      userid: wx.getStorageSync('userid').userid,
      bjid: this.data.dataInfo.bjid,
      ywsx_id: this.data.dataInfo.bjinfo.ywsx_id,
    }
    wx.request({
      url: url.subBJBZInfo,
      method: 'POST',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: data,
      success: res => {
        if (res.data.res_data.state === 1) {
          wx.navigateTo({
            url: '../progressItem/progressItem',
          })
        }
      }
    })
  },


  //获取页面数据
  getData(e) {
    let _this = this;
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
  onLoad: function(options) {

    // this.bjTop(JSON.parse(options.detail))
    this.getData(JSON.parse(options.detail));


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // this.getData();
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