let myArr;

// Question - Find largest number
myArr = [1, 4, 5, 3, 7, 8, 10, 98, 98, 100, 47];

function largestNumberFinder(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Paramter must be an array");
  }

  let largestNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}

// let largeNum = largestNumberFinder(myArr);

// console.log(largeNum);

// ---------------------------------------------------------------------------------

// Question - Find 2nd last largest number
myArr = [1, 4, 5, 3, 7, 8, 10, 98, 100, 100, 47];

function secondLargestNumberFinder(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Paramter must be an array");
  }

  let largestNumber = arr[0];
  let secondLargestNumber = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else {
      if (arr[i] > secondLargestNumber && arr[i] !== largestNumber) {
        secondLargestNumber = arr[i];
      }
    }
  }

  return secondLargestNumber;
}

// let secondLargestNumber = secondLargestNumberFinder(myArr);

// console.log(secondLargestNumber);

// ---------------------------------------------------------------------------------

// Question - find duplicate element and count
myArr = [1, 2, 3, 2, 3, 3, 4, 5, 5, 1, 1, 9];

function duplicateEntriesAndCountFinder(arr = []) {
  let entries = {};
  for (let i = 0; i < arr.length; i++) {
    if (typeof entries[arr[i]] === "number") {
      entries[arr[i]] = entries[arr[i]] + 1;
    } else {
      entries[arr[i]] = 1;
    }
  }

  console.log(entries);
}

// duplicateEntriesAndCountFinder(myArr);

// Question - merge unique elements from two arrays
let myArr1 = [1, 2, 3, 4, 5];
let myArr2 = [3, 6, 7, 2, 1];

function uniqueArrayCreator(...arrays) {
  let providedArray = arrays.flat();
  let uniqueArray = [];

  //   method 1
  for (let i = 0; i < providedArray.length; i++) {
    if (uniqueArray.includes(providedArray[i])) continue;

    uniqueArray.push(providedArray[i]);
  }
  console.log(uniqueArray);

  //   method 2
  console.log([...new Set(providedArray)]);
}
// uniqueArrayCreator(myArr1, myArr2);

// Question - merge unique element by key
let arr1 = [{ name: "ajinkya" }, { name: "rushi" }, { name: "ajinkya" }];
let arr2 = [{ name: "omkar" }, { name: "rushi" }, { name: "rushi" }];

function uniqueArrayCreatorByKey(key, ...arrays) {
  let providedArray = arrays.flat();

  let uniqueArray = [];
  let i = 0;

  while (providedArray.length > i) {
    let isExist = uniqueArray.find((el) => el?.[key] === providedArray[i][key]);

    if (!isExist) {
      uniqueArray.push(providedArray[i]);
    }
    i++;
  }

  console.log(uniqueArray);
}

// uniqueArrayCreatorByKey("name", arr1, arr2);

// Question - Flatten the array

myArr = [1, 2, 3, [3, 4], 3, [2, 3, [4, 5], 4, [1, [3]]], 5];

function arrayFlatterner(arr) {
  let flattenArray = [];
  function flatner(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        flattenArray.push(arr[i]);
      } else {
        flatner(arr[i]);
      }
    }
  }

  flatner(arr);

  console.log(flattenArray);
}

// arrayFlatterner(myArr);

//Question - prototype of map function

function myMap(fn) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      newArr.push(fn(this[i]));
    } else {
      newArr.push(undefined);
    }
  }
  return newArr;
}

Array.prototype.myMap = myMap;

// let newArr = [1, 2, 3].myMap((e) => e * 2);

// console.log(newArr);
