//Write and arrow function that will take 3 parameters, will multiply the parameters and will return the result
const multiply = (a,b,c) =>  a * b * c ;
const product = multiply(1,2,3);
// console.log(product);

// Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biriyani.
const text = `I am a web developer.
I love to code. 
I love to eat biriyani.
`
// console.log(text);

//Write an arrow function that will take two parameters: One parameter will come form you and other parameter will be a default parameter. Add these two parameters and return the result
const add = (a, b=3) => a+b;
const sum = add(2);
// console.log(sum);

//Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of each element is even, push elements with even length to a new array and return the result
//Print the result

const evenNames = (array) => {
    const newArray = [];
    array.forEach(element => {
        if(element.length % 2 == 0){
            newArray.push(element);
        }
    });
    return newArray;
}

const names =  evenNames(['Chinmoy','Niloy', 'Mahdi', 'Mahbub', 'Roni']);
// console.log(names);

// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const averageOfSquares = (array) => {
    const n = array.length;
    let sum = 0;
    array.forEach(element => {
        sum += element*element; 
    });
    return sum / n;
}

const resultAverage = averageOfSquares([1,2,3]);
// console.log(resultAverage);

// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assing them in new aray
// c) Find the maximum number from the new array and return the result

const findMaxBetweenTwo = (array1, array2) => {
    const newArray = [...array1, ...array2];
    const maxNumber = Math.max(...newArray);
    return maxNumber;
}

const maxNumber = findMaxBetweenTwo([1,2,3,4],[4,15,7,3])
// console.log(maxNumber);

