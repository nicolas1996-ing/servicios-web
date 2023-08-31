// findIndex function
/*
    the findIndex function is used to iterate over an array and return the index of the first element that satisfies the condition
    the findIndex function takes a callback function as an argument
    the callback function takes three arguments
    the first argument is the current element
    the second argument is the index of the current element
    the third argument is the array that the findIndex function was called on
    the findIndex function returns the index of the first element that satisfies the condition
    the findIndex function does not mutate the array that the findIndex function was called on
*/

// example
// using for loop
const arr = [1, 2, 3, 4, 5];
let result;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 3) {
    result = i;
    break;
  }
}
console.log(result);
// using findIndex function
const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.findIndex((element, index, array) => {
  return element === 3;
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
    total: 200,
    delivered: true,
  },
  {
    customerName: "alejandra",
    total: 20,
    delivered: true,
  },
  {
    customerName: "camilo",
    total: 70,
    delivered: false,
  },
];

const rta = orders.findIndex((order) => {
  return order.customerName === "alejandra";
});
console.log(rta);
