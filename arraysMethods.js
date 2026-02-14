let arr;
arr = [1, 4, 6, 4, 3, 6, 7, 3, 2, 1];

// Insert the element at the last
arr.push(0);

// Insert the element at the first
arr.unshift(100);

// Remove the last element
arr.pop();

// Remove the first element
arr.shift();

// Slice have two paramters 1) index of element from where slicing start and 2) till position of element.
// It will never modify original array
// This method works on both Array and String
let newArr = arr.slice(2, 4);

let str = "ajinkya";
let a = str.slice(0, 2);

// Splice method remove the part of array by given paramters and also return cutted part
// It wont work on String
// It modifies the original Array
let cuttedArr = arr.splice(0, 3);

// reduce method allow to iterate over the array and return calculated output by passing function condition and initial state
const total = arr.reduce((acc, curr) => acc + curr, 0);
