// pages/zbzcshistory/zbzcshistory.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var obj = this;
    wx.getStorageInfo({
      success: function (res) {
        var info = new Array();
        for (var k in res.keys) {
          var kv = res.keys[k];
          if (kv != 'logs')
            try {
              var tim = new Date(parseInt(res.keys[k], 10));
              info.push({
                "k": tim.getFullYear() + '-' + fmt00((tim.getMonth() + 1)) + '-' + fmt00(tim.getDate())
                + ' ' + fmt00(tim.getHours()) + ":" + fmt00(tim.getMinutes()) + ":" + fmt00(tim.getSeconds()),
                "v": wx.getStorageSync(res.keys[k])
              });
            }
            catch (e) { }
        }
        info.reverse();
        obj.setData({ hist: info });
      },
      fail: function (res) {
        wx.showToast({
          title: '获取历史数据失败',
          icon: 'none',
          duration: 2000
        })
      }
    });
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
  
  },
  onSelectDT:function(e){
    wx.navigateTo({
      url: '../zbzcs/zbzcs?hist=' + e.currentTarget.dataset.val,
    })
  },
  onClear:function(e){
    wx.showModal({
      title: '警告',
      content: '是否清除所有历史记录?',
      success:function(res){
        if (res.confirm) {
          wx.clearStorage();
          wx.navigateBack();
        }
      }
    })
  }
})

function fmt00(s){
  s = '00' + s;
  return s.substring(s.length - 2, s.length);
}