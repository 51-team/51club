
//时间戳转换成日期时间
function js_date_time(unixtime) {
  var dateTime;
  if (unixtime.length < 13) {
    dateTime = new Date(parseInt(unixtime) * 1000)
  } else {
    dateTime = new Date(parseInt(unixtime))
  }
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  var now = new Date();
  var now_new = Date.parse(now.toDateString());  //typescript转换写法
  var milliseconds = now_new - dateTime;
  var timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
  return timeSpanStr;
}
// 网络请求
const request = function (url, method, data, msg, succ, fail, com) {
  // 小程序顶部显示Loading
  wx.showNavigationBarLoading();
  if (msg != "") {
    wx.showLoading({
      title: msg
    })
  }
  wx.request({
    // url: 'http://localhost/sousuo' + url,
    url: 'https://weixin.njkeren.cn/sousuo' + url,
    data: data,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: method,
    success: res => {
      if (succ) succ(res);
    },
    fail: err => {
      wx.showToast({
        title: '网络错误，请稍后再试···',
        icon: 'none'
      })
      if (fail) fail(err);
    },
    complete: com => {
      wx.hideNavigationBarLoading();
      if (msg != "") {
        wx.hideLoading();
      }
      console.log(url + ' 返回的data:', com.data);
    }
  })
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  js_date_time: js_date_time,
  request: request
}