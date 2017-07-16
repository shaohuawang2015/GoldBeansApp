//app.js
var util = require('./utils/util.js');

App({
    onLaunch: function () {
       

        //step 2. 判断是否注册
        //step 3. 注册成功,跳转页面;注册失败,跳转注册
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    }
})

