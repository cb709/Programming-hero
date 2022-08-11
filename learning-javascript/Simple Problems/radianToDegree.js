function radianToDegree(radian){
    if(typeof(radian) != "number"){
        console.log("Not a Number");
    }
    else{
        const pi = 3.1416;
        let degree = (radian * 180) / pi;
        console.log(degree.toFixed(2));
    }

}

radianToDegree(12);
