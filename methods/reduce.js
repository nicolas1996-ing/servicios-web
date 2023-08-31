// reduce function
/*
    the reduce function is used to iterate over an array and return a single value
    the reduce function takes a callback function as an argument
    the callback function takes four arguments
    the first argument is the accumulator
    the second argument is the current element
    the third argument is the index of the current element
    the fourth argument is the array that the reduce function was called on
    the reduce function returns a single value
    the reduce function does not mutate the array that the reduce function was called on
*/

// example
// using for loop
const arr = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(result);

// using reduce function
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce((accumulator, element, index, array) => {
  return accumulator + element;
});
console.log(result2);

// example 2
const users = [
  {
    name: "Nicolas",
    lastname: "Molina",
    age: 12,
  },
  {
    name: "Andrea",
    lastname: "Lopez",
    age: 8,
  },
  {
    name: "Zulema",
    lastname: "Castrillon",
    age: 2,
  },
  {
    name: "Santiago",
    lastname: "Giraldo",
    age: 18,
  },
];

// sum of all ages
const rta3 = users.reduce((accumulator, user) => accumulator + user.age, 0);
console.log("sum of all ages: ", rta3);
