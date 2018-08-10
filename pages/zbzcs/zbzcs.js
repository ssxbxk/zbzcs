// pages/zbzcs/zbzcs.js
var utils = require("../../utils/util.js")

var pageData = [{ "txt": "\u559c\u6b22\u957f\u65f6\u95f4\u81ea\u8eab\u65cb\u8f6c", "point": "4" }, { "txt": "\u5b66\u4f1a\u505a\u4e00\u4ef6\u7b80\u5355\u7684\u4e8b\uff0c\u4f46\u5f88\u5feb\u5c31\u5fd8\u8bb0", "point": "2" }, { "txt": "\u7ecf\u5e38\u6ca1\u6709\u63a5\u89e6\u73af\u5883\u6216\u8fdb\u884c\u4ea4\u5f80\u7684\u8981\u6c42", "point": "4" }, { "txt": "\u5f80\u5f80\u4e0d\u80fd\u63a5\u53d7\u7b80\u5355\u7684\u6307\u4ee4\uff08\u5982\u5750\u4e0b\u3001\u8fc7\u6765\u7b49\uff09", "point": "1" }, { "txt": "\u4e0d\u4f1a\u73a9\u73a9\u5177\uff08\u5982\u6ca1\u5b8c\u6ca1\u4e86\u5730\u8f6c\u52a8\u3001\u4e71\u6254\u3001\u63c9\u7b49\uff09", "point": "2" }, { "txt": "\u89c6\u89c9\u8fa8\u522b\u80fd\u529b\u5dee\uff08\u5982\u5bf9\u4e00\u79cd\u7269\u4f53\u7684\u7279\u5f81\u3001\u5927\u5c0f\u3001\u989c\u8272\u3001\u4f4d\u7f6e\u7b49\u8fa8\u522b\u80fd\u529b\u5dee\uff09", "point": "2" }, { "txt": "\u65e0\u4ea4\u5f80\u6027\u5fae\u7b11\uff08\u5373\u4e0d\u4f1a\u4e0e\u4eba\u70b9\u5934\u3001\u62db\u547c\u3001\u5fae\u7b11\uff09", "point": "2" }, { "txt": "\u4ee3\u8bcd\u8fd0\u7528\u98a0\u5012\u6216\u6df7\u4e71\uff08\u4f60\u3001\u6211\u5206\u4e0d\u6e05\uff09", "point": "3" }, { "txt": "\u957f\u65f6\u95f4\u603b\u62ff\u7740\u67d0\u79cd\u4e1c\u897f", "point": "3" }, { "txt": "\u4f3c\u4e4e\u4e0d\u5728\u542c\u4eba\u8bf4\u8bdd\uff0c\u4ee5\u81f3\u8ba9\u4eba\u6000\u7591\u4ed6\u6709\u542c\u529b\u95ee\u9898", "point": "3" }, { "txt": "\u8bf4\u8bdd\u4e0d\u5408\u97f3\u8c03\u3001\u65e0\u8282\u594f", "point": "4" }, { "txt": "\u957f\u65f6\u95f4\u6447\u6446\u8eab\u4f53", "point": "4" }, { "txt": "\u8981\u53bb\u62ff\u4ec0\u4e48\u4e1c\u897f\uff0c\u4f46\u53c8\u4e0d\u662f\u8eab\u4f53\u6240\u80fd\u8fbe\u5230\u7684\u5730\u65b9(\u5373\u5bf9\u81ea\u8eab\u4e0e\u7269\u4f53\u7684\u8ddd\u79bb\u4f30\u8ba1\u4e0d\u8db3", "point": "2" }, { "txt": "\u5bf9\u73af\u5883\u548c\u65e5\u5e38\u751f\u6d3b\u89c4\u5f8b\u7684\u6539\u53d8\u4ea7\u751f\u5f3a\u70c8\u53cd\u5e94", "point": "3" }, { "txt": "\u5f53\u4e0e\u5176\u4ed6\u4eba\u5728\u4e00\u8d77\u65f6\uff0c\u547c\u5524\u4ed6\u7684\u540d\u5b57\uff0c\u4ed6\u6ca1\u6709\u53cd\u5e94", "point": "2" }, { "txt": "\u7ecf\u5e38\u505a\u51fa\u524d\u51b2\u3001\u65cb\u8f6c\u3001\u811a\u5c16\u884c\u8d70\u3001\u624b\u6307\u8f7b\u6390\u8f7b\u5f39\u7b49\u52a8\u4f5c", "point": "4" }, { "txt": "\u5bf9\u5176\u4ed6\u4eba\u7684\u9762\u90e8\u8868\u60c5\u6ca1\u6709\u53cd\u5e94", "point": "3" }, { "txt": "\u8bf4\u8bdd\u65f6\u5f88\u5c11\u7528\u201c\u662f\u201d\u6216\u201c\u6211\u201d\u7b49\u8bcd", "point": "2" }, { "txt": "\u6709\u67d0\u4e00\u65b9\u9762\u7684\u7279\u6b8a\u80fd\u529b\uff0c\u4f3c\u4e4e\u4e0e\u667a\u529b\u4f4e\u4e0b\u4e0d\u76f8\u7b26\u5408", "point": "4" }, { "txt": "\u4e0d\u80fd\u6267\u884c\u7b80\u5355\u7684\u542b\u6709\u4ecb\u8bcd\u8bed\u53e5\u7684\u6307\u4ee4\uff08\u5982\u628a\u7403\u653e\u5728\u76d2\u5b50\u4e0a\u6216\u653e\u5728\u76d2\u5b50\u91cc\uff09", "point": "1" }, { "txt": "\u6709\u65f6\u5bf9\u5f88\u5927\u7684\u58f0\u97f3\u4e0d\u4ea7\u751f\u5403\u60ca\u53cd\u5e94\uff08\u53ef\u80fd\u8ba9\u4eba\u60f3\u5230\u4ed6\u662f\u804b\u5b50\uff09", "point": "3" }, { "txt": "\u7ecf\u5e38\u62cd\u6253\u624b", "point": "4" }, { "txt": "\u5927\u53d1\u813e\u6c14\u6216\u7ecf\u5e38\u53d1\u70b9\u813e\u6c14", "point": "3" }, { "txt": "\u4e3b\u52a8\u56de\u907f\u4e0e\u522b\u4eba\u7684\u773c\u5149\u63a5\u89e6", "point": "4" }, { "txt": "\u62d2\u7edd\u522b\u4eba\u7684\u63a5\u89e6\u6216\u62e5\u62b1", "point": "4" }, { "txt": "\u6709\u65f6\u5bf9\u5f88\u75db\u82e6\u7684\u523a\u6fc0\u5982\u6454\u4f24\u3001\u5272\u7834\u6216\u6ce8\u5c04\u4e0d\u5f15\u8d77\u53cd\u5e94", "point": "3" }, { "txt": "\u8eab\u4f53\u8868\u73b0\u5f88\u50f5\u786c\u3001\u5f88\u96be\u62b1\u4f4f", "point": "3" }, { "txt": "\u5f53\u62b1\u770b\u4ed6\u65f6\uff0c\u611f\u5230\u4ed6\u7684\u808c\u8089\u677e\u9a70\uff08\u5373\u4f7f\u4ed6\u4e0d\u7d27\u8d34\u62b1\u4ed6\u7684\u4eba\uff09", "point": "2" }, { "txt": "\u4ee5\u59ff\u52bf\u3001\u624b\u52bf\u8868\u793a\u6240\u6e34\u671b\u5f97\u5230\u7684\u4e1c\u897f\uff08\u800c\u4e0d\u503e\u5411\u4e8e\u8bed\u8a00\u8868\u793a\uff09", "point": "2" }, { "txt": "\u5e38\u7528\u811a\u5c16\u8d70\u8def", "point": "2" }, { "txt": "\u7528\u54ac\u4eba\u3001\u649e\u4eba\u3001\u8e22\u4eba\u7b49\u884c\u4e3a\u4f24\u5bb3\u4ed6\u4eba", "point": "2" }, { "txt": "\u4e0d\u65ad\u5730\u91cd\u590d\u77ed\u53e5", "point": "3" }, { "txt": "\u6e38\u620f\u65f6\u4e0d\u6a21\u4eff\u5176\u4ed6\u513f\u7ae5", "point": "3" }, { "txt": "\u5f53\u5f3a\u5149\u76f4\u63a5\u7167\u5c04\u773c\u775b\u65f6\u5e38\u5e38\u4e0d\u7728\u773c", "point": "1" }, { "txt": "\u4ee5\u649e\u5934\u3001\u54ac\u624b\u7b49\u884c\u4e3a\u81ea\u4f24", "point": "2" }, { "txt": "\u60f3\u8981\u4ec0\u4e48\u4e1c\u897f\u4e0d\u80fd\u7b49\u5f85\uff08\u4e00\u60f3\u8981\u4ec0\u4e48\uff0c\u5c31\u9a6c\u4e0a\u8981\u5f97\u5230\uff09", "point": "2" }, { "txt": "\u4e0d\u80fd\u6307\u51fa5\u4e2a\u4ee5\u4e0a\u7269\u4f53\u7684\u540d\u79f0", "point": "1" }, { "txt": "\u4e0d\u80fd\u53d1\u5c55\u4efb\u4f55\u53cb\u8c0a\uff08\u4e0d\u4f1a\u548c\u5c0f\u670b\u53cb\u6765\u5f80\u4ea4\u670b\u53cb\uff09", "point": "4" }, { "txt": "\u6709\u8bb8\u591a\u58f0\u97f3\u7684\u65f6\u5019\uff0c\u5e38\u5e38\u6342\u7740\u8033\u6735", "point": "4" }, { "txt": "\u7ecf\u5e38\u65cb\u8f6c\u78b0\u649e\u7269\u4f53", "point": "4" }, { "txt": "\u5728\u8bad\u7ec3\u5927\u5c0f\u4fbf\u65b9\u9762\u6709\u56f0\u96be\uff08\u4e0d\u4f1a\u63a7\u5236\u5927\u5c0f\u4fbf\uff09", "point": "1" }, { "txt": "\u4e00\u5929\u53ea\u80fd\u63d0\u51fa5\u4e2a\u4ee5\u5185\u7684\u8981\u6c42", "point": "2" }, { "txt": "\u7ecf\u5e38\u53d7\u5230\u60ca\u5413\u6216\u975e\u5e38\u7126\u8651\u4e0d\u5b89", "point": "3" }, { "txt": "\u5728\u6b63\u5e38\u5149\u7ebf\u4e0b\u659c\u773c\u3001\u95ed\u773c\u3001\u76b1\u7709", "point": "3" }, { "txt": "\u4e0d\u662f\u7ecf\u5e38\u88ab\u5e2e\u52a9\u7684\u8bdd\uff0c\u4e0d\u4f1a\u81ea\u5df1\u7ed9\u81ea\u5df1\u7a7f\u8863", "point": "1" }, { "txt": "\u4e00\u904d\u904d\u91cd\u590d\u4e00\u4e9b\u58f0\u97f3\u6216\u8bcd", "point": "3" }, { "txt": "\u77aa\u7740\u773c\u770b\u4eba\uff0c\u597d\u50cf\u8981\u770b\u7a7f\u4f3c\u7684", "point": "4" }, { "txt": "\u91cd\u590d\u522b\u4eba\u7684\u95ee\u8bdd\u6216\u56de\u7b54", "point": "4" }, { "txt": "\u7ecf\u5e38\u4e0d\u80fd\u610f\u8bc6\u6240\u5904\u7684\u73af\u5883\uff0c\u5e76\u4e14\u53ef\u80fd\u5bf9\u5371\u9669\u7684\u73af\u5883\u4e0d\u5728\u610f", "point": "2" }, { "txt": "\u7279\u522b\u559c\u6b22\u6446\u5f04\u3001\u7740\u8ff7\u4e8e\u5355\u8c03\u7684\u4e1c\u897f\u6216\u6e38\u620f\u3001\u6d3b\u52a8\u7b49\uff08\u5982\u6765\u56de\u5730\u8d70\u6216\u8dd1\uff0c\u6ca1\u5b8c\u6ca1\u4e86\u5730\u8e66\u3001\u8df3\u3001\u62cd\u3001\u6572\uff09", "point": "4" }, { "txt": "\u5bf9\u5468\u56f4\u4e1c\u897f\u559c\u6b22\u55c5\u3001\u6478\u6216\u5c1d", "point": "3" }, { "txt": "\u5bf9\u751f\u4eba\u5e38\u65e0\u89c6\u89c9\u53cd\u5e94\uff08\u5bf9\u6765\u4eba\u4e0d\u770b\uff09", "point": "3" }, { "txt": "\u7ea0\u7f20\u5728\u4e00\u4e9b\u590d\u6742\u7684\u4eea\u5f0f\u884c\u4e3a\u4e0a\uff0c\u5c31\u50cf\u7f20\u5728\u9b54\u5708\u91cc(\u5982\u8d70\u8def\u8981\u8d70\u4e00\u5b9a\u7684\u8def\u7ebf\uff0c\u996d\u524d\u6216\u505a\u4ec0\u4e48\u4e8b\u524d\u4e00\u5b9a\u8981\u628a\u4ec0\u4e48\u4e1c\u897f\u6446\u5728\u4ec0\u4e48\u4f4d\u7f6e\uff0c\u6216\u505a\u4ec0\u4e48\u52a8\u4f5c\uff0c\u5426\u5219\u5c31\u4e0d\u7761\u4e0d\u5403", "point": "4" }, { "txt": "\u7ecf\u5e38\u6bc1\u574f\u4e1c\u897f(\u5982\u73a9\u5177\u3001\u5bb6\u91cc\u7684\u4e00\u5207\u7528\u5177\u5f88\u5feb\u5c31\u7ed9\u5f04\u574f\u4e86)", "point": "2" }, { "txt": "\u57282\u5c81\u4ee5\u524d\u5c31\u53d1\u73b0\u5b69\u5b50\u53d1\u80b2\u5ef6\u8fdf", "point": "1" }, { "txt": "\u5728\u65e5\u5e38\u751f\u6d3b\u4e2d\u81f3\u5c11\u752815\u4e2a\u4f46\u4e0d\u8d85\u8fc730\u4e2a\u77ed\u53e5\u8fdb\u884c\u4ea4\u5f80\uff08\u4e0d\u523015\u53e5\u4e5f\u6253\u201c\u2228\u201d\uff09", "point": "3" }, { "txt": "\u957f\u65f6\u95f4\u7591\u89c6\u4e00\u4e2a\u5730\u65b9\uff08\u5446\u5446\u5730\u770b\u4e00\u5904\uff09", "point": "4" }];

var selectedOpt = {};

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //tm: pageData
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hist = undefined;
    if (options.hist != undefined)
      hist = JSON.parse(options.hist);

    var total = 0;
    for (var i = 1; i <= pageData.length; i++){
      var id = "checkbox_" + i;
      if (hist != undefined){
        var val = parseInt(hist[id], 10);
        if (val > 0){
          pageData[i-1]['sel'] = true;
          selectedOpt[id] = pageData[i - 1].point;
          total += parseInt(pageData[i - 1].point, 10);
          console.log(id + ': ' + pageData[i - 1].point + ', ' + total);
        }
        else{
          pageData[i - 1]['sel'] = false;
          selectedOpt[id] = "0";
        }
      }
      else
        pageData[i - 1]['sel'] = false;
    }

    this.setData({ hashist: hist != undefined, tm: pageData, t: total});
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
    return {
      title: utils.shareTitle,
      desc: utils.shareDesc,
      path: utils.sharePath
    }
  }
  ,
  onSelectChkBox:function(e){
    var selectID = e.currentTarget.id;
    selectedOpt[selectID] = e.detail.value
  },
  onGetResult:function(e){
    if (count(selectedOpt) != pageData.length){
      wx.showToast({
        title: '请回答所有题',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    
    var total = 0;
    for (var i in selectedOpt){
      total += parseInt(selectedOpt[i], 10);
    }
    
    // 缓存测试结果
    wx.setStorage({
      key: Date.parse(new Date()).toString(),
      data: JSON.stringify(selectedOpt),
      fail:function(){
        wx.showToast({
          title: '保存结果失败',
          icon: 'none',
          duration: 2000
        })
      }
    })

    // 跳转到结果页
    wx.redirectTo({
      url: '../zbzcsresult/zbzcsresult?res=' + total
    })
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