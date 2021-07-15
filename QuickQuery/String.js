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
