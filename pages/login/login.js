// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://www.edsah.cn/chattom-0.0.1-SNAPSHOT/user/getID',
            data: {
              code: res.code
            },
            header:{
              'content-type': 'application/json'
            },
            method: 'POST',
            success(res) {
              that.setData({
                openid: res.data
              })
              if(res.data == 'pass') {
                wx.navigateTo({
                  url: '/pages/chat/chat'
                }) 
              } else {
                wx.navigateTo({
                  url: '/pages/register/register?openid=' + that.data.openid
                }) 
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },

  getInfo: function () {

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