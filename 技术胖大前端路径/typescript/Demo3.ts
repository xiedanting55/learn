/*
 * @Author: wpTing
 * @Date: 2022-03-02 09:43:29
 * @LastEditTime: 2022-03-02 15:03:19
 * @FilePath: \imadsd:\learn\技术胖大前端路径\typescript\Demo3.ts
 */
// 基础静态类型
const num: number = 918;
const myName: string = "jspang";
// null, undefinde, boolean, void, symbol

// 对象类型 数组类型 类类型 函数类型
const XiaoJieJie1: {
    name: string,
    age: number,
} = {
    name: "大脚",
    age: 18,
}

// console.log(XiaoJieJie1)

const XiaoJieJies: string [] = ["谢大脚", "刘英", "小红"];
console.log(XiaoJieJies)

class Person {}
const dajiao: Person = new Person()

const jianXiaoJieJie: ()=> string = ()=> {
    return "大脚";
}
