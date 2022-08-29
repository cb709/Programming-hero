// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// for( const fruit of fruits.entries()) {
//   console.log(fruit);
// }

  const person = {
    name: 'chinmoy',
    age: 14,
    city: 'dhaka'
  }

  // console.log (typeof(fruits));
  // console.log (typeof(fruits.entries()));

  // for (const value of person) {
  //   console.log(value.toLocaleUpperCase());
  // }

  // Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(Object.getOwnPropertyNames(person))
console.log(Object.getPrototypeOf(person))
