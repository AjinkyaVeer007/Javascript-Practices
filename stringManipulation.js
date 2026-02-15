// Question - Reverse the string

function strReverser(str = "") {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  console.log(newStr);
}

// strReverser("ajinkya");

// Question - Reverse words

function reverseWord(str = "") {
  let strArr = str.split(" ");
  let newStrArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStrArr.push(strArr[i]);
  }

  console.log(newStrArr.join(" "));
}

// reverseWord("I am indian");

// Question - reverse the word's letters but not sequence

function reverseLettersNotSequence(str = "") {
  let strArr = str.split(" ");
  let newStrArr = [];
  for (let i = 0; i < strArr.length; i++) {
    let reverseWord = "";
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      reverseWord += strArr[i][j];
    }
    newStrArr.push(reverseWord);
  }

  console.log(newStrArr.join(" "));
}

// reverseLettersNotSequence("I am indian");

// Question - check is string palindrome

function palindromeChecker(str = "") {
  let modifiedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    modifiedStr += str[i];
  }

  if (str === modifiedStr) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// palindromeChecker("NaN");
