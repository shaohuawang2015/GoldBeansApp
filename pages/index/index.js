//index.js
//获取应用实例
var app = getApp()
var util = require('../../utils/util.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    stopLoading: false
  },
  //事件处理函数
  bindViewTap: function () {
    console.log('test');
    wx.navigateTo({
      url: '../user/register/register',
      complete: function (res) {
        console.log(res)
      }
    });
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据


    //必须注册
    var userId = wx.getStorageSync('userId');
    var childrenInfo = wx.getStorageSync('childrenInfo');
    if (util.isEmptyStr(userId) || util.isNull(childrenInfo)) {
        this.getUserOpenId();
    }else{
        this.setData({
            stopLoading: true
        })
    }
  },


  /** 获取用户的openId */
  getUserOpenId: function () {
      console.log('hello')
      var that = this;
      wx.login({
          success: function (res) {
              if (res.code) {
                  wx.request({
                      url: util.makeRequestUrl("/wx/query3rdSession"),
                      data: {
                          'jsCode': res.code
                      },
                      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT    
                      // header: {}, // 设置请求的 header    
                      success: function (res) {
                          console.log('res' + JSON.stringify(res));
                          var data = res.data;
                          if (data.success) {
                              console.log('userId:' + data.wx3rdSession);
                              wx.setStorageSync('userId', data.wx3rdSession);
                              that.registerChildren(data.wx3rdSession)
                          } else {
                              console.log('request failed');
                          }
                      }
                  });
              }
          },
          fail: function(){
              that.setData({
                  stopLoading: true
              });
          }
      });
  },
  
  registerChildren: function(userId){
      var that = this
      var childInfo = wx.getStorageSync('childInfo');
      if (util.isNull(childInfo) || util.isEmptyStr(childInfo.childrenId)) {
          wx.request({
              url: util.makeRequestUrl("/query/childrenInfo"),
              data: {
                  'userId': userId
              },
              method: 'POST',
              success: function (result) {
                  var data = result.data;
                  if (data.success) {
                      if (!util.isEmptyStr(data.childrenId)) {
                          childInfo = {
                              'childrenId': data.childrenId,
                              'childrenName': data.childrenName,
                              'headic': data.headic,
                              'age': data.age,
                              'point': data.point,
                              'vip': data.vip,
                              'location': data.location
                          }
                          console.log('childInfo:' + JSON.stringify(childInfo));
                          wx.setStorageSync('childInfo', childInfo);
                      } else {
                          wx.navigateTo({
                              url: '/pages/user/register/register',
                          });
                      }
                  } else {
                      console.log('request failed');
                  }
              },
              complete: function(){
                  that.setData({
                      stopLoading: true
                  });
              }
          });
      } else {
          wx.navigateTo({
              url: '/pages/user/register/register',
          });
      }
  }
  
})
