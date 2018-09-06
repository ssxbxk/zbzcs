// pages/kfvideo/kfvideo.js
var utils = require("../../utils/util.js")

var items = [{ title: "不易与别人混在一起玩", idx:0 },
  { title: "听而不闻，像是聋子", idx: 1},
  { title: "教他学什么，他强烈反对，如拒绝", idx: 2 },
  { title: "不顾危险", idx: 3 }]

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