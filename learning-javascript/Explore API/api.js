
fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(json => dummyFunction(json));

function dummyFunction (data) {
  console.log(data)
  const object = data;
  console.log(object)
}

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));