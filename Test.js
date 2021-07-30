var json = {
  name: "fz",
  age: 18,
};
var str = "{\"name\":\"fz\",\"age\":18}";

console.log(JSON.stringify(json, ["name"], 2)) 
JSON.stringify(json); // 将Json序列化为字符串
// JSON.parse(); // 将字符串转为json
