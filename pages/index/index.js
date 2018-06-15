//index.js
//获取应用实例
const app = getApp()

Page({
  onShow: function () {
    var obj = this;
    wx.getStorageInfo({
      success: function (res) {
        obj.setData({ enableHist: res.keys.length <= 1 });
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
  onClickImage:function(){
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              saveImageToLocal();
            }
          })
        }
        else{
          saveImageToLocal();
        }
      }
    })
  }
})

function saveImageToLocal(){
  wx.getImageInfo({
    src: '../../images/ds.png',
    success: function (ret) {
      var path = ret.path;
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success(result) {
          wx.showToast({
            title: '二维码保存成功!',
          })
        }
      })
    }
  })
}