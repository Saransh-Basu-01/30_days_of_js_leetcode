// leetcode no 3
function expect(val) {
    return {
      toBe: function(expected) {
        if (val === expected) {
          return true;
        } else {
          throw new Error("Not Equal");
        }
      },
      notToBe: function(unexpected) {
        if (val !== unexpected) {
          return true;
        } else {
          throw new Error("Equal");
        }
      }
    };
  }

const result = expect(5).toBe(5); // true
console.log(result); // true