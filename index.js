const sum = require('./sum.js')
const mul = require('./multiply.js')
const minus = require('./minus.js');
const div = require('./divide.js');
const max = require('./maxnum.js')
const min = require('./minnum.js')

let arr = [4,7,9,22,6,8,3,2,3,4,6];
console.log("Сумма элементов массива: " + sum(arr));
console.log("Произведение элементов массива: " + mul(arr));
console.log("Разность максимального и минимального элементов массива: " + minus(arr));
console.log("Отношение максимального и минимального элементов массива: " + div(arr));
console.log("Максимальный элемент массива: " + max(arr))
console.log("Минимальный элемент массива: " + min(arr));