var json = {
  name: "fz",
  age: 18,
};
var str = "{\"name\":\"fz\",\"age\":18}";

JSON.stringify(json) // 将Json序列化为字符串  ==> {"name":"fz","age":18}
JSON.stringify(json, ["name"]) // 过滤json字段 ===> {"name":"fz"}
JSON.stringify(json, null, 4) // 第三个参数控制锁进
JSON.parse(str)  // 将字符串转为json  ==> { name: 'fz', age: 18 }