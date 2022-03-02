/*
 * @Author: wpTing
 * @Date: 2022-03-02 15:04:03
 * @LastEditTime: 2022-03-02 15:11:05
 * @FilePath: \imadsd:\learn\技术胖大前端路径\typescript\Demo4.ts
 */

// 类型注解 type annotation
// 类型推断 type inference

// let count: number;
// count = 123;
// let countInference = 123;

// const one = 1;
// const two = 2;
// const three = one + two;

function getTotal(one: number, two: number) {
    return one + two;
}
const total = getTotal(1, 2);

const XiaoJieJie = {
    name: "刘英",
    age: 18
}
