const app = getApp()
var utils = require("../../utils/util.js")
var map = []; // 生成的图像
var currentObj = -1;  // 要选择的对象
var allObjs = [];
var colCnt = 5;
var rowCnt = 7;
var intUpdateTime = null;
var iTime = 0;
const innerAudioContext = wx.createInnerAudioContext();

Page({
  data: {
    time:'00:00:00'
  },
  onLoad: function () {
    // 页面渲染完成
    //实例化一个动画
    this.animSucc = wx.createAnimation({
      timingFunction: 'line',
      // 延迟多长时间开始
      delay: 50,
      /**
       * 以什么为基点做动画  效果自己演示
       * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
       * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
       */
      transformOrigin: '%50 %50 0'
    })
    this.animError = wx.createAnimation({
      timingFunction: 'line',
      // 延迟多长时间开始
      delay: 50,
      /**
       * 以什么为基点做动画  效果自己演示
       * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
       * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
       */
      transformOrigin: '%50 %50 0'
    })
    this.start();
  },
  start:function(){
    if (intUpdateTime != null)
      clearInterval(intUpdateTime);
    intUpdateTime = setInterval(this.updatetime, 1000);
    this.onInitPage();
    this.getObjects();
    this.getColorShape();
    this.setData({ pageobjs: map });
  },
  onInitPage: function(){
    map.length = 0;
    currentObj = -1;  // 当前的颜色
    allObjs.length = 0;
    iTime = 0;
    this.updatetime();
  },
  onClickObj:function(e){
    let arrRowCol = e.target.id.split('_');
    if (this.checkClickedObj(e.target.dataset.objtype))
    {
      // 点击正确
      this.animSucc.rotate(360).scale(0).step();
      map[arrRowCol[0]][arrRowCol[1]].animation = this.animSucc.export();
      this.checkMoreObjInMap();
    }
    else{
      // 点击错误
      this.animError.rotate(360).step();
      map[arrRowCol[0]][arrRowCol[1]].animation = this.animError.export();
      this.PlayVoice(utils.tts_error);
    }
    this.setData({ pageobjs: map });
  },
  getRandomObj:function(){
    return Math.floor(Math.random() * utils.C_MAX_OBJ_IDX);
  },
  getObjects:function(){
    for (let iRow = 0; iRow < rowCnt; iRow++){
      let arrRow = [];
      for (let iCol = 0; iCol < colCnt; iCol++){
        let iRandomObj = this.getRandomObj();
        let obj = { 
          src: utils.arrImages[iRandomObj], 
          objtype: iRandomObj,
          animation: null
        };

        let f = allObjs.find(((value) => {
          return value == iRandomObj
        }));
        
        if (!f)
          allObjs.push(iRandomObj);
        arrRow.push(obj);
      }
      map.push(arrRow);
    }
    return map;
  },
  checkClickedObj: function (objtype){
    return objtype === currentObj;
  },
  getColorShape:function(){
    if (allObjs.length > 0){
      currentObj = allObjs[Math.floor(Math.random() * allObjs.length)];
      this.PlayVoice(utils.arrTTS[currentObj]);
      this.setData({ title: "请点击 - " + utils.translateObj(currentObj) + "(" + allObjs.length + ")"});
    }
    else{
      this.PlayVoice(utils.tts_finished);
      this.setData({ title: "选择完毕" });
      if (intUpdateTime != null){
        clearInterval(intUpdateTime);
        intUpdateTime = null;
      }
    }
  },
  checkMoreObjInMap:function(){
    let hasMore = false;
    for (let iRow = 0; iRow < rowCnt; iRow++) {
      for (let iCol = 0; iCol < colCnt; iCol++) {
        if (map[iRow][iCol].objtype == currentObj && map[iRow][iCol].animation == null){
          hasMore = true;
        }
      }
    }

    if (!hasMore){
      let findIdx = -1;
      let f = allObjs.find(((value, idx) => {
        findIdx = idx;
        return value == currentObj;
      }));

      if (findIdx != -1)
        allObjs.splice(findIdx, 1);
      this.getColorShape();
    }
  },
  ReStart:function(){
    this.start();
  },
  updatetime:function(){
    this.setData({ time: this.getTime()});
  },
  getTime:function(){
    iTime++;
    let sec = parseInt(iTime % 60, 10);
    let tmpTime = parseInt(iTime / 60, 10);
    let min = parseInt(tmpTime % 60, 10);
    tmpTime = parseInt(tmpTime / 60, 10);
    let hour = parseInt(tmpTime % 60, 10);
    return this.fmtNum(hour) + ':' + this.fmtNum(min) + ':' + this.fmtNum(sec);
  },
  fmtNum:function(n){
    if (n <= 9)
      return '0' + n;
    else
      return n;
  },
  PlayVoice:function(src){
    innerAudioContext.src = src;
    innerAudioContext.play();
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((e) => {
      console.log('播放失败:' + e);
    })
  }
})