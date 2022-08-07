// 使用for...of遍历数组如何获取索引
// 可以利用entries()方法将数组转换为可迭代的对象
let arr = ["你好", "在吗"];
for (const [key, value] of arr.entries()) {
  console.log(key, value);
}
