function charAt() {
  // 查字符串在索引位置的字符
  var text = "abcdefg";
  console.log(text.charAt(4)); // e
}

function charCodeAt() {
  // 查字符串在索引位置的字符的编码
  var text = "abcdefg";
  console.log(text.charCodeAt(4)); // 101
}

function concat() {
  // 字符串拼接
  var text = "abcdefg";
  console.log(text.concat("hijk", "!")); // abcdefghijk!
}

function slice() {
  // 字符串截取
  var text = "hello world！";
  console.log(text.slice(3)); // lo world！
  console.log(text.slice(-1)); // ！
  console.log(text.slice(2, 5)); // llo
}

function substr() {
  // 字符串截取, 比slice多一个字符
  var text = "hello world！";
  console.log(text.substr(3)); // lo world！
  console.log(text.substr(-1)); // ！
  console.log(text.substr(2, 5)); // llo w
}

function substring() {
  // 字符串截取
  var text = "hello world！";
  console.log(text.substring(3)); // lo world！
  console.log(text.substring(-1)); // ！
  console.log(text.substring(2, 5)); // llo
}

function indexOf() {
  // 字符串查找字符位置
  var text = "hello world！";
  console.log(text.indexOf("e")); // 1
  console.log(text.lastIndexOf("e")); // 1
}

function trim() {
  // 字符串左右去空
  var text = "  hello   world！  ";
  console.log(text.trim()); // hello   world！
}

function toLowerCase() {
  // 字符串所有字符转换为小写
  var text = "HelloWorld";
  console.log(text.toLowerCase()); // helloworld
}

function toUpperCase() {
  // 字符串所有字符转换为大写
  var text = "HelloWorld";
  console.log(text.toUpperCase()); // HELLOWORLD
}

function match() {
  // 与RegExp中的exec方法相同
  var text = "mom and dad and baby";
  var pattern = /mom( and dad( and baby)?)?/gi;
  var mastches = text.match(pattern);
  console.log(mastches[0]); // mom and dad and baby
}

function search() {
  // 查找模式
  var text = "cat, bat, sat, fat";
  var pattern = text.search(/at/);
  console.log(pattern); // 1
}

function replace() {
  // 字符串中字符替换
  var text = "hello";
  var newtext = text.replace("l", "m");
  console.log(newtext); // hemlo
  var newtext1 = text.replace(/l/g, "m");
  console.log(newtext1); // hemmo
}

function split() {
  // 字符串分割
  var text = "cat,hat,sat,fat";
  var newtext = text.split(",");
  console.log(newtext); // [ 'cat', 'hat', 'sat', 'fat' ]
}

function localeCompare() {
  // 比较两个字符串,按字母表排序
  var text = "123";
  var text1 = "124";
  console.log(text.localeCompare(text1)); // -1
  console.log(text1.localeCompare(text)); // 1
}

function fromCharCode() {
  // 字符编码 => 字符串
  console.log(String.fromCharCode(104, 101, 108, 108, 111)); // hello
}

/**
 * @function the string inserts content every few characters
 * @param {string} str  characters to insert
 * @param {int} length  a few characters apart
 * @example ABCDEFGHIGK ==> ABC^_^DEF^_^GHI^_^GK^_^
 * @description 不支持日语字符
 */
export const strInsert = (str, length) => {
  let reg = new RegExp("\\d{1," + length + "}", "g");
  let ma = str.match(reg);
  return ma.join("^_^") + "^_^"; //最后面不要"^_^" 就去掉( + "^_^")
};

/**
 * @function the string inserts content every few characters
 * @param {string} str  characters to insert
 * @param {int} length  a few characters apart
 * @example あいうえおかきくけこ ==> あいう^_^えおか^_^きくけ^_^こ^_^
 * @description 可以支持日语字符
 */
export const jpStrInsert = (str, length) => {
  var newstr;
  for (var i = 0; i < str.length; i++) {
    if (i % length == 0) {
      var temp = str.substr(i, length) + "^_^";
      i == 0 ? (newstr = temp) : (newstr += temp);
    }
  }
  return newstr;
};

/**
 * @function the string copy splicing
 * @param {string} str  characters to insert
 * @param {int} cycles num
 * @example あいう ==> あいうあいうあいう
 * @description 可以支持日语字符, 循环的次数会比参数小1
 */
export const joinSplice = (str, num) => {
  return new Array(num).join(str);
};
