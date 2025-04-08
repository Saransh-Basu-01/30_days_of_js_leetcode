// leetcode no 6
var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};
// Example usage:
const arr = [0, 10, 20, 30];    
const fn = function greaterThanTen(n) { return n > 10; };
const newArr = filter(arr, fn);
console.log(newArr); // Output: [20, 30]
