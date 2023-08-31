// map function
/*
    the map function is used to iterate over an array and return a new array with the same length
    the map function takes a callback function as an argument
    the callback function takes three arguments
    the first argument is the current element
    the second argument is the index of the current element
    the third argument is the array that the map function was called on
    the map function returns a new array with the same length as the array that the map function was called on
    the map function does not mutate the array that the map function was called on 
*/

// example
// using for loop
const arr = [1, 2, 3, 4, 5];
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i] * 2);
}
console.log(arr2);

// using map function
const arr3 = arr.map((element, index, array) => {
  return element * 2;
});
console.log(arr3);

// example 2
const letters = ["a", "b", "c"];
const letters2 = letters.map((element, index, array) => {
  return element + "++";
});
console.log(letters2); // [ 'a++', 'b++', 'c++' ]

// example 3
const persons = [
  { name: "John", age: 21 },
  { name: "Peter", age: 31 },
  { name: "Mark", age: 41 },
];
const persons2 = persons.map((element, index, array) => {
  return element.name;
});
console.log(persons2); // [ 'John', 'Peter', 'Mark' ]

// example 4
// map reloaded -> select and clean data
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

// in one line is not necessary return
ordersTotals = orders.map((item) => item.total);
console.log(orders);
console.log(ordersTotals);
