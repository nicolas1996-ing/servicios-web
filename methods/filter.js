// filter function
/*
    the filter function is used to iterate over an array and return a new array with the same length or less
    the filter function takes a callback function as an argument
    the callback function takes three arguments
    the first argument is the current element
    the second argument is the index of the current element
    the third argument is the array that the filter function was called on
    the filter function returns a new array with the same length or less as the array that the filter function was called on
    the filter function does not mutate the array that the filter function was called on
*/

// example
// using for loop
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  // condicion de filtrado
  
  // arr[i]: cada uno de los elementos del arr 
  if (arr[i] >= 4) {
    arr2.push(arr[i]);
  }
}

console.log(arr2)


console.log(arr2); 

// using filter function
let arr = [1, 2, 3, 4, 5];
const arr3 = arr.filter((element, index, array) => {
  return element < 3;
});
console.log(arr3)

let week = ["lunes", "martes", "miercoles","jueves"]

const arr4 = week.filter((day)=>{
  return day.includes("u")
})
console.log(arr4)



// example 2
// objects
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
    customerName: "isabella",
    total: 90,
    delivered: true,
  },
];

const ordersDeliveredTrue = orders.filter(order=>{
  // condicion de retorno 
  return order.total < 100 
})

console.log(ordersDeliveredTrue)


const numbers = [100, 200, 300, 315, 234, 12, 345]
