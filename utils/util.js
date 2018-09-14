const shareTitle = "儿童自闭症测试"
const shareDesc = "儿童自闭症测试量表测试, 可保存并查看历史结果!"
const sharePath = "/pages/index/index"

const C_BLACK = 0;
const C_BLUE = 1;
const C_GREEN = 2;
const C_RED = 3;
const C_YELLOW = 4;
const C_MAX_COLOR = 5;

const C_CIRCULAR = 0;
const C_SQUARE = 1;
const C_STAR = 2;
const C_TRIANGLE = 3;
const C_MAX_SHAPE = 4;

const C_BLACK_CIRCULAR = 0;
const C_BLACK_SQUARE = 1;
const C_BLACK_STAR = 2;
const C_BLACK_TRIANGLE = 3;

const C_BLUE_CIRCULAR = 4;
const C_BLUE_SQUARE = 5;
const C_BLUE_STAR = 6;
const C_BLUE_TRIANGLE = 7;

const C_GREEN_CIRCULAR = 8;
const C_GREEN_SQUARE = 9;
const C_GREEN_STAR = 10;
const C_GREEN_TRIANGLE = 11;

const C_RED_CIRCULAR = 12;
const C_RED_SQUARE = 13;
const C_RED_STAR = 14;
const C_RED_TRIANGLE = 15;

const C_YELLOW_CIRCULAR = 16;
const C_YELLOW_SQUARE = 17;
const C_YELLOW_STAR = 18;
const C_YELLOW_TRIANGLE = 19;

const C_MAX_OBJ_IDX = 20;

const arrImages = ['../../images/ic_black_circular.png', '../../images/ic_black_square.png', '../../images/ic_black_star.png', '../../images/ic_black_triangle.png', '../../images/ic_blue_circular.png', '../../images/ic_blue_square.png', '../../images/ic_blue_star.png', '../../images/ic_blue_triangle.png', '../../images/ic_green_circular.png', '../../images/ic_green_square.png', '../../images/ic_green_star.png', '../../images/ic_green_triangle.png', '../../images/ic_red_circular.png', '../../images/ic_red_square.png', '../../images/ic_red_star.png', '../../images/ic_red_triangle.png', '../../images/ic_yellow_circular.png', '../../images/ic_yellow_square.png', '../../images/ic_yellow_star.png', '../../images/ic_yellow_triangle.png'];

function isBlack(v) {
  return v >= C_BLACK_CIRCULAR && v <= C_BLACK_TRIANGLE;
}

function isBlue(v) {
  return v >= C_BLUE_CIRCULAR && v <= C_BLUE_TRIANGLE;
}

function isGreen(v){
  return v >= C_GREEN_CIRCULAR && v <= C_GREEN_TRIANGLE;
}

function isRed(v) {
  return v >= C_RED_CIRCULAR && v <= C_RED_TRIANGLE;
}

function isYellow(v) {
  return v >= C_YELLOW_CIRCULAR && v <= C_YELLOW_TRIANGLE;
}

function isCircular(v){
  return v % 4 == 0;
}

function isSquare(v) {
  return v % 4 == 1;
}

function isStar(v) {
  return v % 4 == 2;
}

function isTriangle(v) {
  return v % 4 == 3;
}

function translateObj(v){
  let bRet = "";
  switch(v){
    case C_BLACK_CIRCULAR: bRet = "黑色圆形"; break;
    case C_BLACK_SQUARE: bRet = "黑色方形"; break;
    case C_BLACK_STAR: bRet = "黑色星星"; break;
    case C_BLACK_TRIANGLE: bRet = "黑色三角形"; break;
    case C_BLUE_CIRCULAR: bRet = "蓝色圆形"; break;
    case C_BLUE_SQUARE: bRet = "蓝色方形"; break;
    case C_BLUE_STAR: bRet = "蓝色星星"; break;
    case C_BLUE_TRIANGLE: bRet = "蓝色三角形"; break;
    case C_GREEN_CIRCULAR: bRet = "绿色圆形"; break;
    case C_GREEN_SQUARE: bRet = "绿色方形"; break;
    case C_GREEN_STAR: bRet = "绿色星星"; break;
    case C_GREEN_TRIANGLE: bRet = "绿色三角形"; break;
    case C_RED_CIRCULAR: bRet = "红色圆形"; break;
    case C_RED_SQUARE: bRet = "红色方形"; break;
    case C_RED_STAR: bRet = "红色星星"; break;
    case C_RED_TRIANGLE: bRet = "红色三角形"; break;
    case C_YELLOW_CIRCULAR: bRet = "黄色圆形"; break;
    case C_YELLOW_SQUARE: bRet = "黄色方形"; break;
    case C_YELLOW_STAR: bRet = "黄色星星"; break;
    case C_YELLOW_TRIANGLE: bRet = "黄色三角形"; break;
  }
  return bRet;
}

function translateText(v) {
  let bRet = 0;
  switch (v) {
    case "黑色圆形": bRet = C_BLACK_CIRCULAR; break;
    case "黑色方形": bRet = C_BLACK_SQUARE; break;
    case "黑色星星": bRet = C_BLACK_STAR ; break;
    case "黑色三角形": bRet = C_BLACK_TRIANGLE; break;
    case "蓝色圆形": bRet = C_BLUE_CIRCULAR; break;
    case "蓝色方形": bRet = C_BLUE_SQUARE; break;
    case "蓝色星星": bRet = C_BLUE_STAR; break;
    case "蓝色三角形": bRet = C_BLUE_TRIANGLE; break;
    case "绿色圆形": bRet = C_GREEN_CIRCULAR; break;
    case "绿色方形": bRet = C_GREEN_SQUARE; break;
    case "绿色星星": bRet = C_GREEN_STAR; break;
    case "绿色三角形": bRet = C_GREEN_TRIANGLE; break;
    case "红色圆形": bRet = C_RED_CIRCULAR; break;
    case "红色方形": bRet = C_RED_SQUARE; break;
    case "红色星星": bRet = C_RED_STAR; break;
    case "红色三角形": bRet = C_RED_TRIANGLE; break;
    case "黄色圆形": bRet = C_YELLOW_CIRCULAR; break;
    case "黄色方形": bRet = C_YELLOW_SQUARE; break;
    case "黄色星星": bRet = C_YELLOW_STAR; break;
    case "黄色三角形": bRet = C_YELLOW_TRIANGLE; break;
  }
  return bRet;
}

function translateColor(v){
  let bRet = "";
  switch(v){
    case C_BLACK: bRet = "黑色";break;
    case C_BLUE: bRet = "蓝色"; break;
    case C_GREEN: bRet = "绿色"; break;
    case C_RED: bRet = "红色"; break;
    case C_YELLOW: bRet = "黄色"; break;
  }
  return bRet;
}

function translateShape(v) {
  let bRet = "";
  switch (v) {
    case C_CIRCULAR: bRet = "圆形"; break;
    case C_SQUARE: bRet = "方形"; break;
    case C_STAR: bRet = "星星"; break;
    case C_TRIANGLE: bRet = "三角形"; break;
  }
  return bRet;
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  shareTitle: shareTitle,
  shareDesc: shareDesc,
  sharePath: sharePath,
  isBlack: isBlack,
  isBlue: isBlue,
  isGreen: isGreen,
  isRed: isRed,
  isYellow: isYellow,
  isCircular: isCircular,
  isSquare: isSquare,
  isStar: isStar,
  isTriangle: isTriangle,
  translateObj: translateObj,
  translateText: translateText,
  arrImages: arrImages,
  translateColor: translateColor,
  translateShape: translateShape,
  C_BLACK: C_BLACK,
  C_BLUE: C_BLUE,
  C_GREEN: C_GREEN,
  C_RED: C_RED,
  C_YELLOW: C_YELLOW,
  C_MAX_COLOR: C_MAX_COLOR,
  C_CIRCULAR: C_CIRCULAR,
  C_SQUARE: C_SQUARE,
  C_STAR: C_STAR,
  C_TRIANGLE: C_TRIANGLE,
  C_MAX_SHAPE: C_MAX_SHAPE,
  C_BLACK_CIRCULAR: C_BLACK_CIRCULAR,
  C_BLACK_SQUARE: C_BLACK_SQUARE,
  C_BLACK_STAR: C_BLACK_STAR,
  C_BLACK_TRIANGLE: C_BLACK_TRIANGLE,
  C_BLUE_CIRCULAR: C_BLUE_CIRCULAR,
  C_BLUE_SQUARE: C_BLUE_SQUARE,
  C_BLUE_STAR: C_BLUE_STAR,
  C_BLUE_TRIANGLE: C_BLUE_TRIANGLE,
  C_GREEN_CIRCULAR: C_GREEN_CIRCULAR,
  C_GREEN_SQUARE: C_GREEN_SQUARE,
  C_GREEN_STAR: C_GREEN_STAR,
  C_GREEN_TRIANGLE: C_GREEN_TRIANGLE,
  C_RED_CIRCULAR: C_RED_CIRCULAR,
  C_RED_SQUARE: C_RED_SQUARE,
  C_RED_STAR: C_RED_STAR,
  C_RED_TRIANGLE: C_RED_TRIANGLE,
  C_YELLOW_CIRCULAR: C_YELLOW_CIRCULAR,
  C_YELLOW_SQUARE: C_YELLOW_SQUARE,
  C_YELLOW_STAR: C_YELLOW_STAR,
  C_YELLOW_TRIANGLE: C_YELLOW_TRIANGLE,
  C_MAX_OBJ_IDX: C_MAX_OBJ_IDX
}
