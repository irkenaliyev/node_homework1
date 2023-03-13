const getMinOf = (arr) =>{
    let min = arr[0];
    for(let i of arr){
        if(min>i){
            min = i;
        }
    }
    return min;
}
module.exports = getMinOf;