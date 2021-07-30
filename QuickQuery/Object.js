function typeOf() {
  // 使用typeof既可以检测对象中的属性书否存在，还可以检测属性的类型
  var a = {
    name: "fz",
    age: 19,
  };
  console.log(typeof a.name == "string");  // true
  console.log(typeof a.address == "string")  // false
}

// E4X 提供了 XML和JS良好的集成, 便于用JS操作XML
var xml = new XML(xml);
var xml = new XMLList();


