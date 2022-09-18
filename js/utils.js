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
// console.log(d)


// 初始化二维数组/矩阵呢
const array = Array(5).fill('');
// 输出 (5) ["", "", "", "", ""]
const matrix = Array(5).fill(0).map(() => Array(5).fill(0));
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
// console.log(rendNum); 713w63x1isq


// 生成颜色值
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// let color = rgbToHex(255,255,255)
// console.log(color);


// 如何在foreach中终止循环
// let arr = ['你好','我是','邓佳贝']
// try{
//     arr.forEach((item,index)=>{
//         if(index === 1) throw 'err'
//         console.log(item)
//     })
// } catch(e){
//     console.log('后续代码',e)
// }


// 判断数据类型
const typeOf = function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};
// typeOf('你好')  // string
// typeOf(123)  // number
// typeOf([1,2])  // array
// typeOf(new Date())  // date
// typeOf(null) // null
// typeOf(true) // boolean
// typeOf(() => { }) // function  

// 防抖
const debounce = (() => {
  let timer = null;
  return (callback, wait = 800) => {
    timer && clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
})();

// 节流
const throttle = (() => {
  let last = 0;
  return (callback, wait = 800) => {
    let now = +new Date();
    if (now - last > wait) {
      callback();
      last = now;
    }
  };
})();

// 节流防抖使用方式(vue)
// methods: {
// loadList() {
//   debounce(() => {
//     console.log('加载数据')
//   }, 500)
//  }
// }


// async await 与 promise 的优缺点
// 优点：
// 它做到了真正的串行的同步写法，代码阅读相对容易
// 对于条件语句和其他流程语句比较友好，可以直接写到判断条件里面
// 处理复杂流程时，在代码清晰度方面有优势

// 缺点：
// 用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性。

