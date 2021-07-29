
// element 
var div = document.createElement('div'); // 创建节点
div.nodeType  // 节点类型 
div.nodeName // 节点元素标签名
div.childNodes  // 它的子节点 数组
div.firstChild  // 第一个子节点
div.lastChild  // 最后一个子节点
div.parentElement // 它的父节点
div.nextSibling  // 它的下一个节点
div.previousSibling  // 它的上一个节点
div.hasChildNodes  // 是否有子节点  布尔
div.ownerDocument  // 整个文档节点
div.appendChild  // 末尾添加一个子节点
div.insertBefore(newN, div.firstChild)  // 插入到某个节点前
div.replaceChild(newN, oldN);  // 替换子节点
div.removeChild(node) // 移除某个子节点
div.cloneNode(true)  // 深复制节点
div.cloneNode(false)  // 浅复制节点
div.normalize  // 处理文本节点

// document
document.body // 引用body
document.doctype // 引用<! DOCTYPE>
document.title // 引用title
document.URL // 获取完整的URL
document.domain // 获取基础域名 xx.aa.com 和 yy.aa.com  aa.com 就是基础域名 实现跨域
document.getElementById(); // 查找元素
document.write("<p>" + "hello" + "<p>") // 写入内容
document.writeln("<p>" + "hello" + "<p>") // 写入内容 后面多加个/n
document.open(); // 打开网页流输入
document.close();  // 关闭网页流输入

// html
<div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"></div>
var div = document.getElementById("myDiv");
div.id // "myDiv"
div.className // "bd"
div.title // "Body text"
div.lang // "en"
div.dir // "ltr"
div.getAttribute("id") // "myDiv"
div.getAttribute("className") // "bd"
div.getAttribute("title") // "Body text"
div.getAttribute("lang") // "en"
div.getAttribute("dir") // "ltr"
div.setAttribute("id", "otherId")  // 更改属性， 其他项也能改

// text
nodeType //3
nodeName // "#text"
nodeValue // 当前文本
appendData(text) // 将text添加到节点的末尾。
deleteData(offset, count) // 从offset指定的位置开始删除count个字符。
insertData(offset, text) // 在offset指定的位置插入text。
replaceData(offset, count, text) // 用text替换从offset指定的位置开始到offset+count为止处的文本。
splitText(offset) // 从offset指定的位置将当前文本节点分成两个文本节点。
substringData(offset, count) // 提取从offset指定的位置开始到offset+count为止处的字符串。
normalize() // 合并text的内容
splitText() // 分开text内容

// comment  TODO

// CDATASection TODO

// DocumentType TODO

// DocumentFragment TODO

// Attr TODO


