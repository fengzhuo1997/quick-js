function includes() {
  // includes 数组中是否包含某个值 -- 对象数组使用无效;
  const arr = [1, 2, 3, 4, 5];
  const includeNum4 = arr.includes(4);
  const includeNum7 = arr.includes(7);
  console.log(includeNum4); // true
  console.log(includeNum7); // false
}

function forEach() {
  // forEach 遍历数组 -- 不改变原数组
  var forEachArr = [
    { name: "feng", age: 18 },
    { name: "zhuo", age: 24 },
  ];
  var forEachArr2 = [];
  forEachArr.forEach((item) => {
    var hangleAge = item.age + 1;
    forEachArr2.push(hangleAge);
  });
  console.log(forEachArr); // [ { name: 'feng', age: 18 }, { name: 'zhuo', age: 24 } ]
  console.log(forEachArr2); // [ 19, 25 ]
}

function map() {
  // map 遍历数组 -- 不改变原数组,生成新数组;
  const mapArr = [1, 5, 3, 2, 66];
  const newMapArr = mapArr.map((item) => item + 1);
  console.log(mapArr); // [ 1, 5, 3, 2, 66 ]
  console.log(newMapArr); // [ 2, 6, 4, 3, 67 ]
}

function shift() {
  // shift 删除数组第一个元素，并返回第一个元素
  const shiftArr = [1, 2, 3];
  shiftArr.shift();
  console.log(shiftArr); // [2, 3]
}

function unshift() {
  // unshift 数组开头添加一个元素
  const unshiftArr = [1, 2, 3];
  unshiftArr.unshift(0);
  console.log(unshiftArr); // [0, 1, 2, 3]
}

function push() {
  // push 数组尾添加一个元素
  const pushArr = [1, 2, 3];
  pushArr.push(4);
  console.log(pushArr); // [1, 2, 3, 4]
}

function pop() {
  // pop 删除数组末尾对后一个元素，并返回最后一个元素
  const popArr = [1, 2, 3];
  popArr.pop();
  console.log(popArr); // [1, 2]
}

function filter() {
  // filter 过滤数组，不改变原数组，返回一个新数组
  const filterArr = [1, 2, 3, 4];
  const newFilterArr = filterArr.filter((item) => item % 2 === 0);
  console.log(filterArr); // [ 1, 2, 3, 4 ]
  console.log(newFilterArr); // [ 2, 4 ]
}

function concat() {
  // concat 连接数组，返回一个新数组
  const concatArrA = [1, 2, 3, 4];
  const concatArrB = [4, 5, 6, 7];
  const newConcatArr = concatArrA.concat(concatArrB);
  console.log(newConcatArr); // [ 1, 2, 3, 4, 4, 5, 6, 7 ]
}

function reverse() {
  // concat 数组内容倒置,直接改变原数组
  const reverseArr = [1, 2, 3, 4];
  reverseArr.reverse();
  console.log(reverseArr); // [ 4, 3, 2, 1 ]
}

function sort() {
  // 数组排序，直接改变排序，默认的排序算法是调用每个数组项的 toString() 转型方法，比较得到的字符串的编码大小，按照最小值在前面，最大值在后面的方式排序
  const sortArr = [6, 2, 8, 4];
  sortArr.sort();
  console.log(sortArr); // [ 2, 4, 6, 8 ]

  const sortArrA = [6, 2, 8, 4];
  sortArrA.sort((a, b) => b - a); // 倒序
  console.log(sortArrA); // [ 8, 6, 4, 2 ]

  const sortArrB = [
    { name: "feng", age: 18 },
    { name: "zhuo", age: 24 },
  ];
  sortArrB.sort((a, b) => a.age - b.age); // 对象数组排序可以给sort传一个函数作为参数
  console.log(sortArrB); // [ { name: 'feng', age: 18 }, { name: 'zhuo', age: 24 } ]
}

function join() {
  // join 数组元素拼接成字符串, 不改变原来的数组
  const joinArr = [1, 2, 3, 4];
  joinStr = joinArr.join("-");
  console.log(joinStr); // 1-2-3-4
}

function every() {
  // every 判断是否数组中的每一项都符合条件
  var everyArr = [
    { name: "feng", age: 18 },
    { name: "zhuo", age: 24 },
  ];
  isPassCheckA = everyArr.every((item) => item.age >= 18);
  isPassCheckB = everyArr.every((item) => item.age > 22);
  console.log(isPassCheckA); // true
  console.log(isPassCheckB); // false
}

function some() {
  // some 判断数组中是否有符合内容的项
  const someArr = [
    { price: 10, name: "apple" },
    { price: 20, name: "orange" },
    { price: 15, name: "banana" },
  ];
  const isCheap = someArr.some((item) => item.price < 15);
  const isExpensive = someArr.some((item) => item.price > 20);
  console.log(isCheap); // true
  console.log(isExpensive); // false
}

function slice() {
  // slice 截取数组，不改变原数组; 取前不取后; 支持负数, -1就是倒数第一个元素，-2就是倒数第二个元素
  const sliceArr = [1, 2, 3, 4, 5, 6];
  console.log(sliceArr); // [1, 2, 3, 4, 5, 6]
  console.log(sliceArr.slice(2, 5)); // [ 3, 4, 5 ]
  console.log(sliceArr.slice(1, -1)); // [ 2, 3, 4, 5 ]
}

function splice() {
  // slice 向数组中添加、删除内容; 不会改变原始数组; 参数含义分别是：第几个索引开始替换, 替换掉几个, 被替换的内容是; 返回的是被替换掉的内容
  const spliceArr = [1, 2, 3, 4, 5, 6];
  const newSpliceArr = spliceArr.splice(1, 2, "A");
  console.log(spliceArr); // [ 1, 'A', 4, 5, 6 ]
  console.log(newSpliceArr); // [ 2, 3 ]
}

function reduce() {
  // reduce 接受4个参数, 分别是：初始值，当前元素值，当前索引，调用reduce的函数
  arr.reduce((prev, current, index, array) => {}, initialValue);
  // 数组求和
  const sumArr = [1, 2, 3, 4, 5];
  const sum = sumArr.reduce((prev, current) => prev + current, 0);
  console.log(sum);
  // 数组求积
  const powArr = [1, 2, 3, 4, 5];
  const pow = powArr.reduce((prev, current) => prev * current, 1);
  console.log(pow);
}

/**
 * @function Array deduplication
 * @param Array
 * @example ['A', 'B', 'C', 'D', 'C', 'R', 'N', 'B'] => [ 'A', 'B', 'C', 'D', 'R', 'N' ]
 * @description 简单数组去重
 */
export const doDedArr = (arr) => {
  const slimArr = arr.reduce((accumulator, current) => {
    return accumulator.includes(current)
      ? accumulator
      : accumulator.concat(current);
  }, []);
  return slimArr;
};

/**
 * @function Array deduplication
 * @param Array
 * @example ['A', 'B', 'C', 'D', 'C', 'R', 'N', 'B'] => [ 'A', 'B', 'C', 'D', 'R', 'N' ]
 * @description 简单数组去重
 */
export const doDedpArr = (arr) => {
  const slimArr = arr.reduce((prev, current) => {
    if (prev.includes(current)) {
      return prev;
    } else {
      return prev.concat(current);
    }
  }, []);
  return slimArr;
};

/**
 * @function Array deduplication
 * @param Array
 * @example ['A', 'B', 'C', 'D', 'C', 'R', 'N', 'B'] => [ 'A', 'B', 'C', 'D', 'R', 'N' ]
 * @description 简单数组去重
 */
export const doDedplArr = (arr) => {
  return arr.filter((item, index, arr) => arr.indexOf(item) === index);
};

/**
 * @function Array deduplication
 * @param Array
 * @example ['A', 'B', 'C', 'D', 'C', 'R', 'N', 'B'] => [ 'A', 'B', 'C', 'D', 'R', 'N' ]
 * @description 简单数组去重
 */
export const doDedpliArr = (arr) => {
  return [...new Set(arr)];
};

/**
 * @function check array Exactly the same
 * @param ArrayA
 * @param ArrayB
 * @example ['A', 'B', 'C'], [ 'A', 'B', 'C'] => true
 * @description 判断两个数组是否完全一致，判定内容一致并顺序一致; 无法处理数组中 null, undefined的情况
 */
export const isArrEqual = (arrA, arrB) => {
  return arrA.join("") === arrB.join(""); // null和undefined都会被转成空字符串
};

/**
 * @function check array Exactly the same
 * @param ArrayA
 * @param ArrayB
 * @example ['A', 'B', 'C'], [ 'A', 'B', 'C'] => true
 * @description 判断两个数组是否完全一致，判定内容一致并顺序一致; 无法处理数组中 null, undefined的情况
 */
export const isArrEqualSame = (arrA, arrB) => {
  return JSON.stringify(arrA) === JSON.stringify(arrB); // undefined和NaN都会被转为null
};

/**
 * @function check array Exactly the same
 * @param ArrayA
 * @param ArrayB
 * @example ['A', 'B', 'C'], [ 'A', 'B', 'C'] => true
 * @description 判断两个数组是否完全一致，判定内容一致并顺序一致; 可以处理数组中有 null, undefined, NaN的情况
 */
export const isArrayEqual = (arrA, arrB) => {
  return (
    arrA.length === arrB.length &&
    arrA.every((ele, index) => Object.is(ele, arrB[index]))
  );
};

/**
 * @function check array content same
 * @param ArrayA
 * @param ArrayB
 * @example ['A', 'C', 'B'], [ 'A', 'B', 'C'] => true
 * @description 判断两个数组内容是否一致，只判定内容一致，不判定顺序; 无法判定数组中有重复内容的情况 eg: [1,1], [1,null]
 */
export const isArrContEqual = (arrA, arrB) => {
  return arrA.length === arrB.length && arrA.every((ele) => arrB.includes(ele));
};

/**
 * @function Find the nearest number in the array to the target value
 * @param ArrayA
 * @param targetNum
 * @example [1,2,5,7,9] 查与3最近的一个数 =>  2
 * @description 查找数组中与目标值相差最小的一个数, 支持负数
 */
export const findNearestNumber = (arrA, targetNum) => {
  // 我们假设最近接的就是数组第第一个数字
  let result = arrA[0];
  for (let i = 1, len = arrA.length; i < len; i++) {
    if (Math.abs(arrA[i] - targetNum) < Math.abs(result - targetNum)) {
      result = arrA[i];
    }
  }
  return result;
};

/**
 * @function Find the nearest number in the array to the target value
 * @param ArrayA
 * @param targetNum
 * @example [1,2,5,7,9,11] 查与3最近的一个数 =>  2
 * @description 查找有序数组中与目标值相差最小的一个数, 支持负数; 有序数组的情况可以用二分查找，减少时间复杂度
 */
export const findNearNumber = (arrA, targetNum) => {
  let mid;
  let l = 0;
  let r = arrA.length - 1;
  // 保证指针最终停留在相邻的两个数,所以这里是判断是否大于1
  while (r - l > 1) {
    mid = Math.floor((l + r) / 2);
    // 如果目标数比中间小，所以范围在左边
    if (targetNum < arrA[mid]) {
      r = mid;
    } else {
      l = mid;
    }
  }
  // 最后比较这两个数字的绝对差大小即可。
  return Math.abs(targetNum - arrA[l]) <= Math.abs(targetNum - arrA[r])
    ? arrA[l]
    : arrA[r];
};
