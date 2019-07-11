var app = getApp()
Page({
    data: {
        
    },
    onLoad: function(options) {

      var that = this;
      wx.request({
        url: 'http://106.12.96.70:8081/part/api/getTecPartList/59582/100384',
        header: { 'Content-Type': 'application/json' },
        success: function (res) {
          that.setData({
            list: res.data
          })
          wx.showToast({
            title: '已提交',
            icon: 'success',
            duration: 2000
          })
        }
      });
    }

})