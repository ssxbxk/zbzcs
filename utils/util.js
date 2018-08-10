const shareTitle = "儿童自闭症测试"
const shareDesc = "儿童自闭症测试量表测试, 可保存并查看历史结果!"
const sharePath = "/pages/index/index"

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
  sharePath: sharePath
}
