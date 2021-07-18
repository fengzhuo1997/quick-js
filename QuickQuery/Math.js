function min() {
  // 查最小值
  var min = Math.min(2, 56, 90, 1, 45);
  console.log(min); // 1
}

function max() {
  // 查最大值
  var max = Math.max(2, 56, 90, 1, 45);
  console.log(max); // 90
}

function apply() {
  // 借用apply，查数组中的最大值
  var values = [2, 45, 67, 8, 45];
  var max = Math.max.apply(Math, values);
  console.log(max); // 67
}

function float() {
  // 四舍五入
  console.log(Math.ceil(2.567)); // 3 向上
  console.log(Math.floor(2.567)); // 2 向下
  console.log(Math.round(2.567)); // 3 四舍五入
}

function random() {
  // 随机数
  console.log(Math.random()); // 0.7066829438881908  0到1之间的随机数
}

function abs() {
  // 绝对值
  console.log(Math.abs(-4)) //4
}
