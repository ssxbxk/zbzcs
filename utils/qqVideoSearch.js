var reg_url_h2 = /<h2 class="result_title">.+?<\/h2>/ig
var reg_url_uploadtime = /<span class="label">时　间：<\/span>[.\r\n\t ]+?<span class="content">.+?<\/span>/ig
var reg_url_length = /<span class="figure_info">(.+?)<\/span>/ig
var reg_get_page = /session: '(.+?)';/i
var URL_NEXT_PAGE = "https://v.qq.com/x/search/?ses={{SS}}&q=%E8%87%AA%E9%97%AD%E7%97%87%E5%BA%B7%E5%A4%8D%E8%AE%AD%E7%BB%83&cur={{PAGE_IDX}}&cxt=tabid=0&sort=0&pubfilter=0&duration=0&stag=4&filter=sort%3D1%26pubfilter%3D0%26duration%3D0%26tabid%3D0%26resolution%3D0"
var URL_ROOT = "https://v.qq.com/x/search/?q=%E8%87%AA%E9%97%AD%E7%97%87%E5%BA%B7%E5%A4%8D%E8%AE%AD%E7%BB%83&stag=4&filter=sort%3D1%26pubfilter%3D0%26duration%3D0%26tabid%3D0%26resolution%3D0";
var listVideo = { "ss": "", "videos": [] };
var idx = 1;
var callback = null;

function init(cb){
  idx = 0;
  listVideo = { "ss": "", "videos": [] };
  callback = cb;
}

function getVideoList(){
  var resp = "";
  if (idx == 1)
    getPage(URL_ROOT);
  else
    getPage(getPageUrl(listVideo.ss, idx));
  idx++;
}

function getPage(url){
  wx.request({
    url: url,
    success: function (res) {
      parseContent(res.data);
      if (callback != null)
        callback(listVideo);
    },
    fail: function (res) {
      console.log('请求失败', res)
    }
  })
}

function parseContent(resp) {
  var arrURL = resp.match(reg_url_h2);
  var arrUploadTime = resp.match(reg_url_uploadtime);
  var arrLength = resp.match(reg_url_length);
  var len = arrURL.length;
  for (var i = 0; i < len; i++) {
    try {
      var href = getVideoId(arrURL[i]);
      if (href != null) {
        var videoObj = {};
        videoObj.vidx = listVideo.videos.length;
        videoObj.vid = href[1];
        var title = href[2].replace(/<em class="hl">/ig, '').replace(/<\/em>/ig, '');
        videoObj.vtitle = title;
        videoObj.vtime = getUploadTime(arrUploadTime[i]);
        videoObj.vlen = getVideoLength(arrLength[i]);
        if (isTooShort(videoObj.vlen)) {
          continue;
        }
        listVideo.videos.push(videoObj);
      }
    }
    catch (e) { }
  }

  listVideo.ss = reg_get_page.exec(resp)[1];
}

// 过滤掉1分钟以内的视频
function isTooShort(time){
  let ret = false;
  try{
    let arrTime = time.split(':');
    let h = parseInt(arrTime[0], 10);
    let m = parseInt(arrTime[1], 10);
    if (h == 0 && m < 1)
      ret = true;
  }catch(e){}
  return ret;
}

function getPageUrl(ss, idx) {
  return URL_NEXT_PAGE.replace('{{SS}}', ss).replace('{{PAGE_IDX}}', idx);
}

function getVideoId(str) {
  var reg_url_videoid = /href=".+\/(.+?)\.html".+?>(.+?)<\/a>/i
  return reg_url_videoid.exec(str);
}

function getUploadTime(str) {
  try {
    var reg = /<span class="content">(.+?)<\/span>/i
    return reg.exec(str)[1];
  }
  catch (e) {
    return "未知";
  }
}

function getVideoLength(str) {
  try {
    var reg = /<span class="figure_info">(.+?)<\/span>/i;
    return reg.exec(str)[1];
  }
  catch (e) {
    return "未知";
  }
}

module.exports = {
  init:init,
  getVideoList: getVideoList
}