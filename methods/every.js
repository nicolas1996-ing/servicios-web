// every function
/*
    the every function is used to iterate over an array and return true if all elements satisfy the condition
    the every function takes a callback function as an argument
    the callback function takes three arguments
    the first argument is the current element
    the second argument is the index of the current element
    the third argument is the array that the every function was called on
    the every function returns true if all elements satisfy the condition
    the every function does not mutate the array that the every function was called on
*/

// example
// using for loop
const arr = [1, 2, 3, 4, 5];
let result = true;
for (let i = 0; i < arr.length; i++) {
  // condition if arr[i] is less than 4
  if (arr[i] < 4) {
    result = false;
    // break the loop  if arr[i] is less than 4
    break;
  }
}
console.log(result);

// using every function
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.every((element, index, array) => {
  return element > 4; // condition if element is greater than 4, return false
});
console.log(result2);

// example 2
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

// all players are under 40 years old ?
const rta3 = team.every((player) => player.age < 40);
console.log("player: ", rta3);
