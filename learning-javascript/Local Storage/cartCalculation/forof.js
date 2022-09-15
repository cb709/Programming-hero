let numbers = [28, 78, 32, 14];

function average(nums) {
    let average = 0;
    for(const num of nums) {
    average += num;
    }
    return average/nums.length;
}
console.log(average(numbers))