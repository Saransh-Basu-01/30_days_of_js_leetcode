// leetcode problem no 1 
function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}
const helloWorld = createHelloWorld();
console.log(helloWorld()); // Output: "Hello World"