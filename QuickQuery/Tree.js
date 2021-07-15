/**
 * @function operate on each node of the tree
 * @param {Array} tree array
 * @example 获取tree结构中，所有节点的名字
 * @description 递归方式
 */
export const handleTree = (datas) =>{
  //遍历树  获取id数组
  var keyArray = [];
  for (var i in datas) {
    // 收集每个节点，将节点对象key为name的值收集
    keyArray.push(datas[i].name);  // 此次需求为收集每隔节点的名字
    // childNode为子节点
    if (datas[i].children) {
      keyArray = keyArray.concat(handleTree(datas[i].children));
    }
  }
  return keyArray;
};