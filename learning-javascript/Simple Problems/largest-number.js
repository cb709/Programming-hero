var num1 = 60;
var num2 = 40;
var num3 = 50;

var largest = null;

if (num1 > num2) {
    if(num1 > num3){
        largest = num1;
    }
    else {largest = num3;}
}else {
    if(num2 > num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }
}

console.log(largest)