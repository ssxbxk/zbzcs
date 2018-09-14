// pages/kfvideo/kfvideo.js
var utils = require("../../utils/util.js")

var items = [{ title: "test", idx:0 },
  { title: "test", idx: 1},
  { title: "test", idx: 2 },
  { title: "test", idx: 3 }]

Page({
  data: {
    vitems: items
  },
  onLoad:function(){
    let h = wx.getSystemInfoSync().windowHeight;
    this.setData({ svHeight: "height: " + (h - 300) + "px;"});
  },
  onShareAppMessage: function (e) {
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  },
  OnPlay:function(name, url){
    console.log(name);
  }
})