// pages/mainpage/mainpage.js
var utils = require("../../utils/util.js")
// 在页面中定义激励视频广告
let rewardedVideoAd = null

Page({
  onLoad: function () {
    if (wx.createRewardedVideoAd) {
      rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId: 'adunit-16172ac14b78e44c' })
      rewardedVideoAd.onLoad(() => {
      })
      rewardedVideoAd.onError((err) => {
      })
      rewardedVideoAd.onClose((res) => {
      })
    }
  },
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
  onAdv:function(){
    // 用户触发广告后，显示激励视频广告
    if (rewardedVideoAd) {
      rewardedVideoAd.show().catch(() => {
        // 失败重试
        rewardedVideoAd.load()
          .then(() => rewardedVideoAd.show())
          .catch(err => {
            console.log('激励视频 广告显示失败')
          })
      })
    }
  }
  ,
  onShareAppMessage: function (e) {
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  }
})