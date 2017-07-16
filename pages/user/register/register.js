// register.js
var util = require('../../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        /** 默认头像图片 */
        "headerDefaultImage": "../../../../images/user/header_default_image.jpg",
        childrenInfo: {

        }
    },

    /**
     * children Name
     */
    bindChildrenNameChange: function (event) {
        var childrenInfo = this.data.childrenInfo;
        childrenInfo.childrenName = event.detail.value;
        this.setData({
            childrenInfo: childrenInfo
        });
    },


    /**
     * 选择生日
     */
    bindBirthdayChange: function (event) {
        var childrenInfo = this.data.childrenInfo;
        childrenInfo.birthday = event.detail.value;
        this.setData({
            childrenInfo: childrenInfo
        });
    },

    /**
     * 提交按钮
     */
    bindRegisterSubmit: function (event) {

        var childrenInfo = {
            childrenName: 'wsh',
            headic: '',
            age: '24',
            location: 'chengdu',
            userId: wx.getStorageSync("userId")
        };

        wx.request({
            url: util.makeRequestUrl("/user/register"),
            data: childrenInfo,
            method: 'POST',
            success: function (result) {
                var data = result.data;
                if (data.success) {
                    wx.setStorageSync('childInfo', childrenInfo);
                    util.showToast('注册成功');
                    wx.switchTab({
                        url: '/pages/index/index',
                    })
                } else {
                    util.showToast('注册失败');
                }
            }
        });
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