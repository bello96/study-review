// 使用for...of遍历数组如何获取索引
// 可以利用 entries() 方法将数组转换为可迭代的对象
let arr = ["邓佳贝", "你好", "呀"];
for (const [key, value] of arr.entries()) {
  console.log(key, value);
}
