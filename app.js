//app.js

const url = 'http://202.99.99.135 /v1?client_id=yhxcx&client_secret=880055513D7EF8FAF30E7DA7B03B9582';
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: res => {
        console.log('1111111111')
 
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.globalData.userInfo = res;
  
      }
    })
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log(res)
        console.log('222222222')

        if (res.authSetting['scope.userInfo']) {
          console.log('3333333333333')

          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('4444444444444')

              this.warrant()
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          wx.redirectTo({
            url: './dailg/dailg',
          })
        }
      }
    })
  },

  //授权登录


  warrant () {
      wx.request({
        url: 'http://202.99.99.135/v1/api?method=tjkfqExchange.tjoa.auth&client_id=yhxcx&client_secret=880055513D7EF8FAF30E7DA7B03B9582',
        success : res => {
          console.log(res)
        }
      })
  },

  globalData: {
    userInfo: null,

    registerUrl: url+'/api',//注册接口
  }
})