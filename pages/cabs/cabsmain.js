// pages/cabs/cabsmain.js
var utils = require("../../utils/util.js")

var selectedOpt = {};

var items = [{ title: "不易与别人混在一起玩", idx: 0 },
{ title: "听而不闻，像是聋子", idx: 1 },
{ title: "教他学什么，他强烈反对，如拒绝", idx: 2 },
{ title: "不顾危险", idx: 3 },
{ title: "不能接受日常习惯的变化", idx: 4 },
{ title: "以手势表达需要", idx: 5 },
{ title: "莫名其妙的笑", idx: 6 },
{ title: "不喜欢被人拥抱", idx: 7 },
{ title: "不停地动、坐不住，活动量过大", idx: 8 },
{ title: "不望对方的脸，避免视线接触", idx: 9 },
{ title: "过度偏爱某些物品", idx: 10 },
{ title: "喜欢旋转的东西", idx: 11 },
{ title: "反复怪异的动作或玩耍", idx: 12 },
{ title: "对周围漠不关心", idx: 13 }]

Page({
  /**
   * 页面的初始数据
   */
  data: {
    qitems: items
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },
  onShareAppMessage: function (e) {
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  },
  onSelectChkBox:function(e){
    var selectID = e.currentTarget.id;
    selectedOpt[selectID] = e.detail.value
  },
  onGetResult:function(e){
    if (count(selectedOpt) != items.length) {
      wx.showToast({
        title: '请回答所有项目',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    var total = 0, iNo = 0, iST = 0, iOF = 0;
    for (var i in selectedOpt) {
      var tmp = parseInt(selectedOpt[i], 10);
      if (tmp == 0)
        iNo++;
      else if (tmp == 1)
        iST++;
      else
        iOF++;
      total += tmp;
    }

    this.setData({
      theresult: '总计' + total + '分, 其中从不' + iNo + '项, 偶尔' + iST + '项' + ', 经常' + iOF + '项',
      getresult: true
    });
  }
})

function count(obj) {
  var t = typeof obj;
  if (t == 'string') {
    return obj.length;
  } else if (t == 'object') {
    var n = 0;
    for (var i in obj) {
      n++;
    }
    return n;
  }
  return 0;
}