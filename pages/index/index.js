//index.js
//获取应用实例
var utils = require("../../utils/util.js")

Page({
  onShow: function () {
    var obj = this;
    wx.getStorageInfo({
      success: function (res) {
        obj.setData({ disableHist: res.keys.length <= 1 });
      },
      fail: function (res) {
        wx.showToast({
          title: '获取数据失败',
          icon: 'none',
          duration:2000
        })
      }
    });
  },
  onStart:function(e){
    wx.navigateTo({
      url: '../zbzcs/zbzcs'
    })
  },
  onHistory:function(){
    wx.navigateTo({
      url: '../zbzcshistory/zbzcshistory'
    })
  },
  onShareAppMessage: function (e) {
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  }
})