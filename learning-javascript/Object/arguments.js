function add (){
    let sum = 0;
    // --------------1st method------------------
    // for (let i = 0; i < arguments.length; i++){
    //     sum = sum + arguments[i];
    // }

    // ------------------2nd method-----------------
    // Object.keys(arguments).forEach((x)=> sum += arguments[x]);
   
    //    ------------------3rd method-----------------
    let values = Object.values(arguments);
    for(const x of values) {
        sum += x;
    }

    return sum;

}

const result = add(1,2,3,4,5,6);
console.log(result);