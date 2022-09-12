//given an array of numbers and a number as a parameter, you have to return the pair elements within array whose sum is equal to the given number 
// given input [1,2,4,5,6] & 10
// return will be [4,6]

const findPair = (arr, sum) => {
    const pair = []
    for(i=0; i< arr.length-1 ; i++){
        for(j= i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == sum){
                pair.push(arr[i]);
                pair.push(arr[j]);
            }
        }
    }
    return pair;
}

const result1 = findPair([], 6);
console.log(result1)