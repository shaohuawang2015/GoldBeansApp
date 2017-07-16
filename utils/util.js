function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 空字符串
 */
function isEmptyStr(str) {
    if (str == null || str == undefined || str === '') {
        return true;
    }
    return false;
}

/**
 * 判断对象是否为空
 */
function isNull(obj) {
    if (obj == null || obj == undefined) {
        return true;
    }
    return false;
}

function makeRequestUrl(url){
    const baseUrl = "https://mjudiao.com/goldbeans";
    if(isEmptyStr(url)){
        return baseUrl;
    }
    return baseUrl + url;
}

function showToast(str) {
    wx.showToast({
        title: str,
        mask: true,
        icon: 'success',
        duration: 2000
    });
}


module.exports = {
  formatTime: formatTime,
  isEmptyStr: isEmptyStr,
  isNull: isNull,
  makeRequestUrl: makeRequestUrl,
  showToast: showToast,
}


