const obj = {
    a: 1,
    b: 2
}
const objCopy = JSON.parse(JSON.stringify(obj));

console.log(obj)
console.log(objCopy)

obj.c = 3;
objCopy.d = 4;

console.log(obj)
console.log(objCopy)