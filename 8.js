// leetcode question no 7
var reduce = function(nums, fn, init) {
    let val = init;

    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    return val;
};
// Example usage:
const nums = [1, 2, 3, 4];
const fn = function sum(accumulated, num) { return accumulated + num; };
const init = 0;
const result = reduce(nums, fn, init);
console.log(result); // Output: 10
