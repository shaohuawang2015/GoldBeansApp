//app.js
App({
  globalData: {
    appid: '1wqas2342dasaqwe2323424ac23qwe',
    secret: 'e0dassdadef2424234209bwqqweqw123ccqwa',
    userInfo: null
  },
  onLaunch: function () {
    //step 1. 获取user openId
    var openId = this.getUserOpenId();
    //step 2. 判断是否注册
    //step 3. 注册成功,跳转页面;注册失败,跳转注册
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },


  /** 获取用户的openId */
  getUserOpenId: function() {
    var that = this;
    var user = wx.getStorageSync('user') || {};
    var userInfo = wx.getStorageSync('userInfo') || {};
    if ((!user.openid || (user.expires_in || Date.now()) < (Date.now() + 600)) && (!userInfo.nickName)) {
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.getUserInfo({
              success: function (res) {
                var objz = {};
                objz.avatarUrl = res.userInfo.avatarUrl;
                objz.nickName = res.userInfo.nickName;
                wx.setStorageSync('userInfo', objz);//存储userInfo  
              }
            });
            var openIdUrl = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + that.globalData.appid + '&secret=' + that.globalData.secret + '&js_code=' + res.code + '&grant_type=authorization_code';
            wx.request({
              url: openIdUrl,
              data: {},
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT    
              // header: {}, // 设置请求的 header    
              success: function (res) {
                var obj = {};
                obj.openid = res.data.openid;
                obj.expires_in = Date.now() + res.data.expires_in;
                //console.log(obj);  
                wx.setStorageSync('user', obj);//存储openid   
                return obj.openid;
              }
            });
          } else {
            return '';
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
    }
  }





})
