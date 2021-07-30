EventUtil.addHandler(window, "load", function () {
  // load事件， 页面内容加载后触发
});

EventUtil.addHandler(window, "unload", function () {
  // unload事件，文档被完全卸载后触发
});

EventUtil.addHandler(window, "resize", function () {
  // resize事件，窗口被调整高度或宽度后触发
});

EventUtil.addHandler(window, "scroll", function () {
  // scroll事件，窗口滚动条滚动后触发 
});
         
focusout // 失去焦点的元素上触发
focusin  // 获得焦点的元素上触发
blur // 失去焦点的元素上触发
DOMFocusOut // 在失去焦点的元素上触发
focus // 获得焦点的元素上触发
DOMFocusIn // 获得焦点的元素上触发

click // 鼠标点击事件
dblclick // 双击点击事件
mousedown  // 鼠标按下任意按钮触发
mouseenter // 光标首次移到元素之内触发
mouseleave // 光标移到元素之外触发
mousemove // 光标在元素内移动会反复的触发
mouseout // 光标移动到另一个元素时触发
mouseover // 光标首次移动到元素边界触发
mouseup  // 用户释放鼠标按钮时触发

keydown // 键盘按下任意键触发
keypress // 按下任意字符触发
keyup // 释放键盘上的按钮触发
