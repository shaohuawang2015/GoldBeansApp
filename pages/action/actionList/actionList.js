// actionList.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fixed: "fixed",
        modalHidden: true,
        categories: [
            {
                'categoryId': '1',
                'name': '健康',
                'actionList': [{
                    id: 1,
                    image: '../../../images/icon/navigation.png',
                    name: '刷牙',
                    days: 10,
                    point: 10
                }, {
                    id: 2,
                    image: '../../../images/icon/navigation.png',
                    name: '洗脸',
                    days: 10,
                    point: 10
                }, {
                    id: 3,
                    image: '../../../images/icon/arrow.png',
                    name: '吃早饭',
                    days: 10,
                    point: 10
                }]
            }, {
                'categoryId': '2',
                'name': '语言',
                'actionList': [{
                    id: 1,
                    image: '../../../images/icon/navigation.png',
                    name: '刷牙',
                    days: 10,
                    point: 10
                }, {
                    id: 2,
                    image: '../../../images/icon/navigation.png',
                    name: '洗脸',
                    days: 10,
                    point: 10
                }]
            }, {
                'categoryId': '3',
                'name': '社交',
                'actionList':[]
            }, {
                'categoryId': '4',
                'name': '科学',
                'actionList':[]
            }, {
                'categoryId': '5',
                'name': '艺术',
                'actionList':[]
            }
        ],
        curTab: 0,
        total: 0,
        list: []

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

        this.setData({
            list: this.data.categories[this.data.curTab].actionList
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

    },

    onCategoryChange: function (event) {
        console.log(event)
        const dataset = event.currentTarget.dataset;

        this.setData({
            curTab: dataset.index,
            list: this.data.categories[dataset.index].actionList
        });
    },

    onActionListChange: function(event){
        this.setData({
            modalHidden: false,
        })
    },

    onModalConfirm: function(){
        this.setData({
            modalHidden: true,
        })
    },

    onModalCancel: function(){
        this.setData({
            modalHidden: true,
        })
    }
})