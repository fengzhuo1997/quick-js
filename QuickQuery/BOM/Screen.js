function attribute() {
  screen.availWidth; // 屏幕的像素高度减系统部件高度之后的值（只读）
  screen.availLeft; // 未被系统部件占用的最左侧的像素值（只读）
  screen.availTop; // 未被系统部件占用的最上方的像素值（只读）
  screen.availWidth; // 屏幕的像素宽度减系统部件宽度之后的值（只读）
  screen.bufferDepth; // 读、写只用与呈现屏外位图的位数
  screen.colorDepth; // 表现颜色的位数（只读）
  screen.deviceXDPI; // 屏幕的实际水平的DPI（只读）
  screen.deviceYDPI; // 屏幕的实际垂直的DPI（只读）
  screen.fontSmooth - ingEnabled; // 是否启用了字体平滑 （只读）
  screen.height; // 屏幕像素高度
  screen.left; // 当前屏幕距左边的像素距离
  screen.logicalXDPI; // 屏幕逻辑的水平DPI（只读）
  screen.logicalYDPI; // 屏幕逻辑的垂直DPI（只读）
  screen.pixelDepth; // 屏幕的位深
  screen.top; // 当前屏幕距上边的像素距离
  screen.updateInterval; // 读、写以毫秒表示的屏幕刷新时间间隔
  screen.width; // 屏幕的像素宽度
}

// 调整浏览器窗口大小，全面占据屏幕
window.resizeTo(screen.availWidth, screen.availHeight);  // 有兼容问题