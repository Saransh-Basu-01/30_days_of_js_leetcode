// leetcode problem no 5
function createCounter(init) {
    let current = init;  // this stores the current value
  
    return {
      increment: function() {
        current += 1;
        return current;
      },
      decrement: function() {
        current -= 1;
        return current;
      },
      reset: function() {
        current = init;
        return current;
      }
    };
  }

    const counter = createCounter(5);
    console.log(counter.increment()); // Output: 6
    console.log(counter.increment()); // Output: 7
    console.log(counter.increment()); // Output: 8
    console.log(counter.increment()); // Output: 9
    console.log(counter.decrement()); // Output: 8
    console.log(counter.decrement()); // Output: 7
    console.log(counter.reset());    // Output: 5