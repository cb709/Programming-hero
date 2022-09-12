// var min = function(list){
//     let min = list[0];
//   list.forEach(num => {
//     if(num < min) {
//       min = num;
//     }
//   })
    
//     return min;
// }

// var max = function(list){
    
//     let max = list[0];
//    list.forEach(num => {
//     if(num > max) {
//       max = num;
//     }
//   })
    
//     return max;
// }

// let result1 = min([1,2,3,0,4,5,6])
// let result2 = max([10,23,3,44,5,6])

// console.log(result1,result2)

function bmi(weight, height) {
    let bmi = weight / Math.pow(height,2)
    return bmi;
  }

let result = bmi(80,1.80);
console.log(result)