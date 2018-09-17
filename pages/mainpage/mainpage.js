// pages/mainpage/mainpage.js
var utils = require("../../utils/util.js")

Page({
  onABC:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  onCABS: function () {
    wx.navigateTo({
      url: '../cabs/cabsmain',
    })
  },
  onCARC:function(){
    wx.navigateTo({
      url: '../cars/carsmain',
    })
  },
  onKFSP:function(){
    wx.navigateTo({
      url: '../kfvideo/kfvideo',
    })
  },
  onKFZN:function(){
    wx.navigateTo({
      url: '../kfzn/kfznmain',
    })
  },
  onJYXL:function(){
    wx.navigateTo({
      url: '../jyxl/jyxlmain',
    })
  },
  onYSXZBB:function(){
    wx.navigateTo({
      url: '../xlxmcolors/xlxmcolors',
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