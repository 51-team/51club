// pages/repairpart/repairpart.js
var app = getApp();
var network_util = require('../../utils/network_util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    navLeftItems: [],
    navRightItems: [],
    curNav: 0,
    curIndex: 0
  },
  selThis(e) {
    console.log(e.detail);
  },
  formSubmit: function (e) {
    var that = this;
    var vin = e.detail.value.vin; 
    wx.request({
      url: 'http://106.12.96.70:8081/part/api/getRepairTree/' + vin,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        that.setData({
          modelInfo: res.data,
          flag: true,
          vin: vin
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
   * 生命周期函数--监听页面加载
   */
  onclick: function (e) {
    var that = this;
    var url = 'http://106.12.96.70:8081/part/api/getShortCutList/59582';
    //parentCateList
    network_util._get(url,
      function (res) {
        that.setData({
          navLeftItems: res.data
        });
        var url = 'http://106.12.96.70:8081/part/api/getSecondShortCutList/59582/' + res.data[0].shortCutId;
        network_util._get(url,
          function (res) {
            that.setData({
              navRightItems: res.data
            })
          }, function (res) {
            console.log(res);
          }
        );
      }
    );
  },

  //事件处理函数
  switchRightTab: function (e) {
    var that = this
    var id = e.target.dataset.id;
    var index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: index,
      curIndex: id
    })
    var url = "http://106.12.96.70:8081/part/api/getSecondShortCutList/59582/" + id;
    network_util._get(url,
      function (res) {
        that.setData({
          navRightItems: res.data
        })
      }, function (res) {
        console.log(res);
      }
    );
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