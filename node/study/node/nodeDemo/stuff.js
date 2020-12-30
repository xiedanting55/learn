var counter = function(arr) {
    return '一共有' + arr.length + '个元素'
}

// console.log(counter(['amy', 'herry', 'john']))

var add = function(x,y) {
    return `两个值值和${x+y}`
}

// module
module.exports = {
    counter: counter,
    add: add
};