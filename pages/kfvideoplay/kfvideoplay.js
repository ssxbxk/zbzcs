var defPlayed = true;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    showAdv:true
  },
  onPlay:function(){
    if (!defPlayed){
      this.setData({
        showAdv: false
      });
    }
    defPlayed = false;
  },
  onPause: function () {
    this.setData({
      showAdv: true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoUrl = wx.getStorageSync('videourl');
    let h = wx.getSystemInfoSync().windowHeight;
    this.setData({
      url: videoUrl,
      svHeight: "height: " + h + "px;"
    });
    wx.showToast({
      title: '10秒后广告自动关闭',
    })
    setTimeout(this.closeAdv, 10000);
  },
  closeAdv:function(){
    this.setData({
      showAdv: false
    });
  },
  videoErrorCallback:function(e){
    wx.showModal({
      title: '提示',
      content: '视频播放失败!',
      showCancel: false,
      success: function (res) {
        wx.navigateBack();
      }
    })
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

  }
})