const second = () => console.log('I am second');
const third = () => console.log('I am third');
const first = () => {
    setTimeout(second, 5000);
    console.log('I am first');
    third();
}

first();
