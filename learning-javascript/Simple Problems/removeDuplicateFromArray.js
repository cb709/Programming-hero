var array = [1,2,3,4,5,2,3,4,5,7,8,1,2,3];

function removeDuplicate(array) {
    let n = array.length;
    const result = []; 
    for( var i = 0; i < n; i++){
        // console.log(i);
        if(result.includes(array[i])===false){
            result.push(array[i]);
        }
    }
    return result;
}



console.log(removeDuplicate(array));

