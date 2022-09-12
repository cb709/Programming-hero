function factorial (num) {
    // if(num==0) {
    //     return 1;
    // }
    // else{
    //     console.log(num)
    //     return (num * factorial(num-1));
    // }
    return (num * factorial(num-1))
}

const sum = factorial(7)
console.log(sum)
