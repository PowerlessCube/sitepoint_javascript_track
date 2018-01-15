/* 
Closures in the same scope share common data

All closures created in the same scope share the same variables, and will reflect their current value, not their value at the time of creation.
*/

var counter;
var functions = [];
var values = [];

for(counter = 0; counter < 5; counter ++) {
  values[counter] = counter;
  functions[counter] = function() {
    return counter;
  };
}
console.log(values[0]); // 0
console.log(values[2]); // 2
console.log(values[4]); // 4
console.log(functions[0]()); // 5
console.log(functions[2]()); // 5
console.log(functions[4]()); // 5

// First tip - don't define functions in loops
// but if your going to and using ECMAScropt 5 and earlier, loops cannot have their own scope.
// Use a constructor funcrion to create a new independent scope for each closure created.

/* Lets try it again with that in mind */
var counter;
var functions = [];
var values = [];
var makeReturner = function(value) {
  return function() {
    return value
  };
};

for (counter = 0; counter < 5; counter++) {
  values[counter] = counter;
  functions[counter] = makeReturner(counter);
}

console.log(values[0]); // 0
console.log(values[2]); // 2
console.log(values[4]); // 4
console.log(functions[0]()); // 0
console.log(functions[2]()); // 2
console.log(functions[4]()); // 4

/* ES6 introduced let variables, which create a temporary/locally scoped variable and lets each of our functions to have there own unique value for counter. */
var functions = [];
var values = [];
for (let counter = 0; counter < 5; counter++) {
  values[counter] = counter;
  functions[counter] = function() {
    return counter;
  };
}
console.log(values[0]); // 0
console.log(values[2]); // 2
console.log(values[4]); // 4
console.log(functions[0]()); // 0
console.log(functions[2]()); // 2
console.log(functions[4]()); // 4

