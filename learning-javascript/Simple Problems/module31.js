// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = oddNumbers.map((value) => value + 1);
// console.log(evenNumbers);

// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.

const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = numbers.filter((value) => value % 10 === 0);
// console.log(divisibleByTen);

// 3) Now do the same task of question 2. But do this using array.find()
// method. Then compare the output of question 2 & question 3.

const numbersArray = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTenbyFind = numbersArray.find((value) => value % 10 === 0);
// console.log(divisibleByTenbyFind)

// 4) You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

const newNumbers = [1, 9, 17, 22];
const sum = newNumbers.reduce((previous, current) => {
  return previous + current;
}, 0);
// console.log(sum);

// 5) Follow array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

// const ages = people.map(item => item.age).reduce((previous, current) => previous + current , 0)
const result = people.reduce(function (previous, current) {
  return previous + current.age;
}, 0);
// console.log(result);

// 6) how do you empty an array
const samir = [1, 2, 3, 4, 5];

// first method
// samir.length = 2;

// second method
samir.splice(0, samir.length);

// console.log(samir)
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2 == false);
console.log(output);
