// 使用for...of遍历数组如何获取索引
// 可以利用 entries() 方法将数组转换为可迭代的对象
let arr = ["佳贝", "你好", "吗"];
for (const [key, value] of arr.entries()) {
  // console.log(key, value);
}

// 找出数组交集
function union(a, b) {
  return [...new Set([...a, ...b])];
}
// let c = union([1,2,3],[2,0,3])
// console.log(c)

// 找出数组的并集
function intersection(a, b) {
  return a.filter((i) => new Set(b).has(i));
}
// let d = intersection([2,6], [4,2,6]);
// console.log(d);
