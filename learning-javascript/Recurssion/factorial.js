function factorial(i){
    if(i == 0){
        return 1;
    }
    else {
        return (i * factorial(i-1))
    }
}

console.log(factorial(0));