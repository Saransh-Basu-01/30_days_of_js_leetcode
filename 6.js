// leetcode no 5
var map = function(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }

    return result;
};
// Example usage:
const arr = [1, 2, 3, 4];
const fn = function plusOne(n) { return n + 1; };
const newArr = map(arr, fn);
console.log(newArr); // Output: [2, 3, 4, 5]