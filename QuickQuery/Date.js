function date() {
  var now = new Date();
  console.log(now); // 2021-07-16T08:50:30.705Z
  console.log(now.getTime()); // 1626425495230
}

function parse() {
  // 基于GMT创建  认为参数给的是【当地时区】给转化成 【GMT】时间
  console.log(Date.parse("2000/01/01 12:05:26:130")); // 946699526130 ==> 2000-01-01T04:05:26.130Z
  console.log(Date.parse("6/13/2003")); // 1055433600000
  console.log(Date.parse("2004-05-25T00:00:00")); // 1085414400000  ==> 2004-05-24T16:00:00.000Z
  console.log(Date.parse("January 12,2004")); // 1073836800000
  var newDate = new Date(Date.parse("January 12,2004"));
  console.log(newDate); // 2004-01-11T16:00:00.000Z
}

function UTC() {
  // 基于本地市区创建  认为参数给的是【当地时区】, 不转换
  var newDate = new Date(Date.UTC(2000, 0, 12, 13, 34, 56, 123)); // 2000年1月12日 13点34分56秒 123毫秒
  console.log(newDate); // 2000-01-12T13:34:56.123Z
}

function now() {
  var now = Date.now();
  console.log(now); // 1626612050298
}

function convert() {
  // 数组转字符串; 不同历览器解析会有差异
  var now = new Date();
  console.log(now.valueOf()); // 1626612140462
  console.log(now.toLocaleString()); // 2021-7-18 20:42:20
  console.log(now.toString()); // Sun Jul 18 2021 20:42:20 GMT+0800 (CST)
  console.log(now.toTimeString()); // 20:43:27 GMT+0800 (CST)
  console.log(now.toLocaleDateString()) // 2021-7-18
  console.log(now.toLocaleTimeString()); // 20:44:48
  console.log(now.toUTCString()); // Sun, 18 Jul 2021 12:44:48 GMT
}
