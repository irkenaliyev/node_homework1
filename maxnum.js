const getMaxOf = (arr) =>{
    let max = arr[0];
    for(let i of arr){
        if(max<i){
            max=i;
        }
    }
    return max;
}
module.exports = getMaxOf;

