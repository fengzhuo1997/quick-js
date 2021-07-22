function screen() {
  // 窗口位置 窗口相对与屏幕左和屏幕上的距离
  // 浏览器执行 screenLeft、screenX ==> Chrome firefox 都已实现
  var leftPos =
    typeof window.screenLeft == "number" ? window.screenLeft : window.screenX;
  var topPos =
    typeof window.screenTop == "number" ? window.screenTop : window.screenY;
  console.log(leftPos, topPos);
}

function open() {
  // 新开一个窗口
  // 第二个参数为窗口名称
  var neww = window.open(
    "https://www.baidu.com",
    "topFrame",
    "width=400,height=400,top=100,left=100"
  );
}

function moveTo() {
  // 移动浏览器窗口到目标坐标位置
  window.open("", "", "width=200,height=100");
  neww.moveTo(300, 400); // x=300; y=400
}

function moveTo() {
  // 浏览器窗口移动的距离
  var neww = window.open("", "", "width=200,height=100");
  neww.moveBy(50, 0); // 向右平移50像素
}

function size() {
  // 改变窗口大小
  // outerHeight => 浏览器本身高度
  // outerWidth => 浏览器本身宽度
  // innerHeight => 浏览器页面试图高度  Chrome中oouterHeight和innerHeight一样
  // innerWidth => 浏览器页面试图宽度   Chrome中outerWidth和innerWidth一样

  // 兼容代码
  var pageWidth = window.innerWidth;
  var pageHeight = window.innerHeight;
  if (typeof pageWidthb != "number") {
    if (document.compatMode == "CSS1Compat") {
      pageWidth = document.documentElement.clientWidth;
      pageHeight = document.documentElement.clientHeight;
    } else {
      pageWidth = document.body.clientWidth;
      pageHeight = document.body.clientHeight;
    }
  }

  // 查看
  var neww = window.open("", "", "width=200,height=100");
  neww.innerWidth; // 200 Chrome
  neww.outerWidth; // 200 Chrome

  var neww = window.open("", "", "width=200,height=100");
  neww.innerWidth; // 500 Firefox
  neww.outerWidth; // 200 Firefox
}

function resizeTo() {
  // 更改窗口大小到多大
  var neww = window.open("", "", "width=200,height=100");
  neww.resizeTo(500, 500);
}

function resizeBy() {
  // 在当前窗口大小的基础上，继续变化多大
  var neww = window.open("", "", "width=200,height=100");
  neww.resizeTo(500, 500);
  neww.resizeBy(100, 100); // 600, 600
}

function close() {
  // 在当前窗口大小的基础上，继续变化多大
  var neww = window.open("", "", "width=200,height=100");
  neww.close();
  console.log(neww.closed) // true
}

function alert() {
  window.alert("helllo"); // 通知对话框
  window.confirm("OK?")  //  确认对话框 带确定按钮
  window.prompt("please input") // 输入对话框，带输入框
}