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
  var newDate = new Date(Date.UTC(2000,0,12,13,34,56,123)) // 2000年1月12日 13点34分56秒 123毫秒
  console.log(newDate); // 2000-01-12T13:34:56.123Z
}
