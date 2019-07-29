var app = getApp()
Page({
    data: {
        
    },
    onLoad: function(options) {

      var that = this;
      wx.request({
        url: 'https://www.51qx.club/part/api/getTecPartList/'+options.modelId+'/'+options.groupId,
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