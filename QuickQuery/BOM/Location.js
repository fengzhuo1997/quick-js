// location对象既是window对象属性又是document对象属性

function attribute() {
  location.hash; // 返回URL中的hash(#后跟零或多个字符)
  location.host; // 返回服务器名称和端口号
  location.hostname; // 返回不带端口号的服务器名称
  location.href; // 返回当前页面的完整URL
  location.pathname; // 返回URL中的目录或文件名
  location.port; // 返回URL中指定的端口号
  location.protocol; // 返回页面使用的协议
  location.search; // 返回URL的查询字段 ==> ?name='fz'&age=18&address='dl' 可解析
}

// 解析location.search中各个参数用
function getQueryStringArgs() {
  var qs = location.search.length > 0 ? location.search.substring(1) : "",
    args = {},
    items = qs.length ? qs.split("&") : [],
    item = null,
    name = null,
    value = null,
    i = 0,
    len = items.length;
  for (i = 0; i < len; i++) {
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}

function location() {
  location.assign("https://www.baidu.com"); // 页面立即跳转
}

function reload() {
  location.reload(); // 刷新当前页面
}
