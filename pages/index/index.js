const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    flag:false,

  },
  formSubmit: function (e) {
    var that = this;
    var vin = e.detail.value.vin; //获取表单所有name=id的值 
    wx.request({
      url: 'https://www.51qx.club/part/api/getModelInfoByVin?type=1&vin=' + vin,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          modelInfo: res.data.modelInfo,
          modelPartList: res.data.modelPartList,
          flag: true,
          vin:vin
        })
        wx.showToast({
          title: '已提交',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  onLoad(options){
    
  }
})