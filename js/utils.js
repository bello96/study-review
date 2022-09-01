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


// 初始化二维数组/矩阵呢？
const array = Array(5).fill(''); 
// 输出 (5) ["", "", "", "", ""]
const matrix = Array(5).fill(0).map(()=>Array(5).fill(0)); 
// 输出
// (5) [Array(5), Array(5), Array(5), Array(5), Array(5)]
// 0: (5) [0, 0, 0, 0, 0]
// 1: (5) [0, 0, 0, 0, 0]
// 2: (5) [0, 0, 0, 0, 0]
// 3: (5) [0, 0, 0, 0, 0]
// 4: (5) [0, 0, 0, 0, 0]
// length: 5

// 随机数字符串
let rendNum = Math.random().toString(36).slice(2)
// console.log(rendNum);


// 生成颜色值
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// let color = rgbToHex(255,255,255)
// console.log(color);