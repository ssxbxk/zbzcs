// pages/kfvideo/kfvideo.js
var utils = require("../../utils/util.js")
var qqVideoSearch = require("../../utils/qqVideoSearch.js")
var qqVideo = require("../../utils/qqVideo.js")

Page({
  data: {
    tipinfo: '长按下面的视频进行播放'
  },
  onLoad:function(){
    let h = wx.getSystemInfoSync().windowHeight;
    this.setData({
      svHeight: "height: " + (h-180) + "px;"
    });
    qqVideoSearch.init(this.videoListCallback);
    qqVideoSearch.getVideoList();
  },
  videoListCallback:function(e){
    this.setData({
      vitems:e.videos
    });
  },
  onShareAppMessage: function (e) {
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  },
  OnPlay:function(e){
    var vid = e.currentTarget.dataset.vid;
    var vtit = e.currentTarget.dataset.vtitle;
    var that = this;
    qqVideo.getVideoes(vid).then(function (response) {
      that.setData({
        tipinfo: "播放: " + vtit
      });
      wx.setStorageSync('videourl', response[0])
      wx.navigateTo({
        url: '../kfvideoplay/kfvideoplay',
      })
    });
  },
  OnLoadMore:function(){
    qqVideoSearch.getVideoList();
  }
})