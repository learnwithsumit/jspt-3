// make a function that sorts its arguments without using loops
const myFunction = function () {
  return [].slice.call(arguments).sort();
};

console.log(myFunction(2, 1, 4, 3));