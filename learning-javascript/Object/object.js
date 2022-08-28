const person = {
    name: 'chinmoy',
    age: 15,
    address: 'dhaka'
}

const a = 10;
const b = 20;
const c = 30;

function showPerson (person) {
    arguments[0] = 'Niloy';
    console.log(arguments)
}

showPerson(a,b,c);

console.log(a)