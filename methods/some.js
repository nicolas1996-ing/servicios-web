// some function
/*
    the some function is used to iterate over an array and return true if at least one element satisfies the condition
    the some function takes a callback function as an argument
    the callback function takes three arguments
    the first argument is the current element
    the second argument is the index of the current element
    the third argument is the array that the some function was called on
    the some function returns true if at least one element satisfies the condition
    the some function does not mutate the array that the some function was called on
*/

// example
// using for loop
const arr = [1, 2, 3, 4, 5];
let result = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 4) {
    result = true;
    break;
  }
}
console.log(result);

// using some function
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.some((element, index, array) => {
  return element > 4;
});
console.log(result2);

// example 2
const orders = [
  {
    customerName: "nicolas",
    total: 120,
    delivered: false,
  },
  {
    customerName: "alejandra",
    total: 20,
    delivered: true,
  },
  {
    customerName: "alejandra",
    total: 80,
    delivered: true,
  },
  {
    customerName: "camilo",
    total: 70,
    delivered: false,
  },
  {
    customerName: "gabriela",
    total: 80,
    delivered: false,
  },
  {
    customerName: "isabella",
    total: 90,
    delivered: true,
  },
];

const rta = orders.some((item) => {
  return item.total > 100;
});
console.log(rta);
