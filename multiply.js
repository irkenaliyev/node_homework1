const getMulOf = (arr) =>{
    let mul = 1;
    for(let i of arr){
        mul*=i;
    }
    return mul;
}
module.exports = getMulOf;