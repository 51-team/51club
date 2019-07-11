// pages/querypart/querypart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    var type = options.type; //获取链接值  
    var vin = options.vin;
    wx.request({
      url: 'http://106.12.96.70:8081/part/api/getNewPartByVin?vinType=1&type='+type+'&vin=' + vin,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          parts: res.data.parts,
          oemParts: res.data.oemParts
        })
        wx.showToast({
          title: '已提交',
          icon: 'success',
          duration: 2000
        })
      }
    });

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