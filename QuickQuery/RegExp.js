function exec() {
  // 捕获匹配
  var text = "mom and dad and baby";
  var pattern = /mom( and dad( and baby)?)?/gi;
  var mastches = pattern.exec(text);
  console.log(mastches.index); // 0
  console.log(mastches.input); // mom and dad and baby
  console.log(mastches[0]); // mom and dad and baby
  console.log(mastches[1]); // and dad and baby
  console.log(mastches[2]); // and baby
}

function test() {
  // 正则测试
  var text = "000-00-0000";
  var pattern = /\d{3}-\d{2}-\d{4}/;
  console.log(pattern.test(text)); // true
}

