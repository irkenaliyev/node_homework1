const max = require('./maxnum.js');
const min = require('./minnum.js');

const getDivideOfTwo = (arr) =>{
    return (max(arr)/min(arr))
}
module.exports = getDivideOfTwo;