// 使用for...of遍历数组如何获取索引
// 可以利用 entries() 方法将数组转换为可迭代的对象
let arr = ["邓佳贝", "你好", "呀"];
for (const [key, value] of arr.entries()) {
  // console.log(key, value);
}

// 找出数组交集
function bingji(a,b) {
  return [...new Set([...a,...b])]
}
// let c = bingji([1,2,3],[2,0,3])
// console.log(c)
