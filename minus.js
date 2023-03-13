const max = require('./maxnum.js');
const min = require('./minnum.js');

const getMinusOfTwo = (arr) =>{
    return (max(arr) - min(arr));
}
module.exports = getMinusOfTwo;