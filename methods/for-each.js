// Path: methods/includes.js

// for-each loop
/* 
    the for-each loop is used to iterate over an array
    the for-each loop takes a callback function as an argument
    the callback function takes three arguments
    the first argument is the current element
    the second argument is the index of the current element
    the third argument is the array that the for-each loop was called on
    the for-each loop does not return anything
*/

// example
console.log(arr.length)

let number = 10 
console.log(number)

number+=1
console.log(number) 

number++
console.log(number)

number = number + 1
console.log(number)


// using for loop
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  // iteracion 1 = 0
  // iteracion 2 = 1
  // iteracion 3 = 2
  // iteracion 4 = 3
  // iteracion 5 = 4
  console.log(arr[i]);
}

// using for-each loop
arr = [10, 20, 30, 40, 50];
arr.forEach((element, index, array) => {

  // console.log(element)
  // console.log(element, index, array);
  // console.log(`arr element: ${element}`);

});

// example 2
const arr2 = ["lunes", "martes", "miercoles", "jueves", "viernes"];
arr2.forEach((day, index, week) => {
  console.log(day)
});

const arr3 = ["maria", "pablo", "andres", "jose", "diana"];
arr3.forEach((name, idx, people)=>{
  console.log(people)
})
