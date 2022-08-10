// // print-second-largest-number-of-an-array

var arr = [3,2,1,5,4]

var n = arr.length;
// console.log(n)

for (var i = 0; i<n; i++){
  for(var j=i+1; j<n; j++){
    if(arr[i]>arr[j]){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
        // [arr[i],arr[j]] = [arr[j]=arr[i]];

    }
  }
}

console.log("Second Largest Numberis: " + arr[1]);
