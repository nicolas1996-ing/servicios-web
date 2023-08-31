// flat function
/*
    the flat function is used to iterate over an array and return a new array with all sub-arrays concatenated into it
    the flat function takes an optional argument that specifies the depth of the sub-arrays
    the flat function returns a new array with all sub-arrays concatenated into it
    the flat function does not mutate the array that the flat function was called on
*/

// example
// using for loop
const arr = [1, 2, 3, [4, 5]];
let result = [];
for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    result = result.concat(arr[i]);
  } else {
    result.push(arr[i]);
  }
}
console.log(result);

// using flat function
const arr2 = [1, 2, 3, [4, 5]];
const result2 = arr2.flat();
console.log(result2);

// example 2
const entries = [
  ["name", "nicolas"],
  ["age", 12],
];
console.log(Object.fromEntries(entries)); // { name: 'nicolas', age: 12 }