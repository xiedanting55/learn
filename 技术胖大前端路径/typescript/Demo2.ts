/*
 * @Author: wpTing
 * @Date: 2022-03-02 09:27:55
 * @LastEditTime: 2022-03-02 09:41:27
 * @FilePath: \imadsd:\learn\技术胖大前端路径\typescript\Demo2.ts
 */
// 静态类型 static typing

let count: number = 1;
// count.  //提示了方法和属性
// count = "技术胖";  //报错，必须是number类型

interface XiaoJieJie {
    uname: string;
    age: number;
}

const xiaohong: XiaoJieJie = {
    uname: "小红",
    age: 18
}
console.log(xiaohong)