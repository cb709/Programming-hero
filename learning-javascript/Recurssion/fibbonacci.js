function fibbonacci(i) {
    if (i==0){
        return 0;
    }
    else if (i == 1){
        return 1;
    }
    else {
        return (fibbonacci(i-1) + fibbonacci(i-2));
     }
}

// let n = 10;

// for (let i = 0 ; i < n ; i++ ){
//     console.log(fibbonacci(i));
// }

console.log(fibbonacci(6))