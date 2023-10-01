/** @format */

//String Problems
//Problem 1
//Make a function that accepts one string and return it reversed
revString = function (str) {
  let strToArray = str.split("");
  return strToArray.reverse().join("");
};
console.log(revString("ahmed"));
console.log("===============================================");
//Problem 2
//Function that accepts two string and check if they are equal or not (not case sensitive)

checkEqualStr = function (str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1 === str2) {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkEqualStr("Mohamed", "mohamed");
console.log("===============================================");
//Problem 3
//Function that takes a string and check if this string is all uppercase or not.

checkUpperCase = function (str) {
  if (str === str.toUpperCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkUpperCase("AHMED");
console.log("===============================================");
//Problem 4
//Function that takes a string and two positions as numbers and return the
// part of the string between these two positions(Make two different solutions).

function slicing(str, start, end) {
  console.log(str.slice(start, end));
}
slicing("Ahmed", "1", "4");
console.log("===============================================");
//Problem 5
// Make a function that accepts 3 names as a parameter first one is
// firstName second is middleName and third lastName.
// And then the function should return one string containing all three
// names separated by a space without using (+) operator.

concatStrings = function (fName, mName, lName) {
  return `${fName} ${mName} ${lName}`;
};
console.log(concatStrings("Mohamed", "Ali", "Sayed"));
console.log("===============================================");
//Problem 6
//Function that accepts a string and then checks if it is palindrome or not.
// (Search for what palindrome string is if you don't know).

checkPalindrome = function (str) {
  let palind = str.split("");
  if (str === palind.reverse().join("")) {
    console.log(`The String ${str} is palindrome`);
  } else {
    console.log(`The String ${str} is not palindrome`);
  }
};
checkPalindrome("madam");
console.log("===============================================");
//Problem 7
// Function that accepts a string and remove the extra spaces at the start
// and the end of this string

noSpace = function (str) {
  return str.trim();
};
console.log(noSpace("    Mohamed     "));
console.log("===============================================");
//Problem 8
// n specific location all URLs start with (ww.) and ends with (.eraa).
// Make a function that accepts a URL and check if it's from this location or not.

checkUrl = function (url) {
  if (url.startsWith("ww.") && url.endsWith(".eraa")) {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkUrl("ww.abcd.eraa");
console.log("===============================================");
//Problem 9
// Function that takes a string and remove the 'o' letter from it (Capital and small)

removeO = function (name) {
  return name.replace(/o/gi, "");
};
console.log(removeO("OsOamao"));
console.log("===============================================");
//Problem 10
// Function that accepts three strings. Check if the second and the third strings are a substring of the first one.
// (Substring means that the string is a part of another string)
checkSub = function (str1, str2, str3) {
  if (str1.includes(str2) && str1.includes(str3)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkSub("SoWhatYesOhh", "What", "Ohh");

console.log(`==================================================
==================================================
==================================================`);

//Loops Problems

//Problem 1
// Create a function that takes two number as input and return true if one
// of them is 15 or their summation is 15

checkNumbers = function (num1, num2) {
  if (num1 === 15 || num2 === 15 || num1 + num2 === 15) {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkNumbers(10, 5);
console.log("===============================================");

//Problem 2
// Function to check if the given number is a perfect square or not
checkSquare = function (number) {
  if (number >= 0) {
    let sqrt = Math.sqrt(number);
    return sqrt === Math.trunc(sqrt);
  }
};
console.log(checkSquare(121));
console.log("===============================================");

//Problem 3
// You have five variables x1, x2, x3, x4, x5 their values are initially (1, 2, 3,
//   4, 5). One of these variables is replaced with 0. You need to make a
//   function that takes these five variables and checks which of them is replaced.

zeroPosition = function (x1, x2, x3, x4, x5) {
  let arr = [x1, x2, x3, x4, x5];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log(`Zero Position Is ${i + 1}`);
    }
  }
};
zeroPosition(1, 2, 3, 0, 5);
console.log("===============================================");

//Problem 4
// Given a letter. If the letter is lowercase print this letter after converting it
// to uppercase. And if the letter is uppercase print this letter after
// converting it to lowercase.

convertLetter = function (char) {
  return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
};

console.log(convertLetter("a"));
console.log("===============================================");

//Problem 5
// Create function that takes two numbers as input to calculate the sum of
// odd numbers greater than the first numbers and less than the second number

calcSum = function (num1, num2) {
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
      continue;
    }
    sum += i;
  }
  console.log(sum);
};

calcSum(10, 30);
console.log("===============================================");

//Problem 6
// Function that takes a number n and then takes n numbers from the user
// (using prompt) and if the numbers that the user will enter contains 4 or 7
// then log to the console “It's your lucky day” otherwise log “It's not your
// lucky day”.
luckyNumber = function (number) {
  let gussing = [];
  for (let i = 0; i < number; i++) {
    // gussing.push(+prompt(`Insert ${number} numbers`));
  }
  if (gussing.includes(4) || gussing.includes(7)) {
    console.log(`It's your lucky day`);
  } else {
    console.log(`It's not your lucky day`);
  }
};
luckyNumber(5);
console.log("===============================================");

//Problem 7
// Function that takes number N and then print all the divisors of this
// number. (You can search for what is the divisors is)

divisor = function (number) {
  let divisors = [];
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.join(",");
};
console.log(divisor(12));
console.log("===============================================");

//Problem 8
// Given number N you have to print all prime number between 1 and n
// (Prime numbers are the number that are inly divisible by 1 and it self)

primeNumbers = function (number) {
  let primes = [];
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      primes.push(i);
    }
  }
  return primes;
};
console.log(primeNumbers(5));
console.log("===============================================");

//Problem 9
// Function that takes a number n and then takes n numbers from the user
// (using prompt) and count the sum of these numbers, how many odd
// numbers, how many even numbers.

sumNumbers = function (number) {
  let numbers = [];
  let sum = 0;
  let odd = 0;
  let even = 0;
  for (let i = 0; i < number; i++) {
    // numbers.push(+prompt(`Insert ${number} numbers`));
    sum += numbers[i];
  }
  console.log(`the sum of number is ${sum}`);
  for (j = 0; j < numbers.length; j++) {
    if (numbers[j] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(`number of even numbers is ${even}`);
  console.log(`number of odd numbers is ${odd}`);
};
sumNumbers(5);
console.log("===============================================");

//Problem 10
//Function takes number n, log to console n lines that describe PUM game.
pumGame = function (rows) {
  let start = 1;
  for (let i = 0; i < rows; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
      row += start + j + " ";
    }
    row += "Pum";
    console.log(row);
    start += 4;
  }
};
pumGame(4);
console.log("===============================================");

//Problem 11
// Create function that takes two numbers that have to determine if the
// product of these two numbers will be positive or negative or zero.

checkProduct = function (num1, num2) {
  let product = num1 * num2;
  if (product > 0) {
    console.log(`the product is Positive`);
  } else if (product < 0) {
    console.log(`the product is Negative`);
  } else {
    console.log(`the product is Zero`);
  }
};
checkProduct(2, 5);
console.log("===============================================");

// Problem 12
// Create a function finalGrade(), which calculates the final grade of a
// student depending on two parameters: a grade for the exam and the
// number of completed projects.
// This function should take two arguments: grade for exam (from 0 to 100),
// number of completed projects (from 0 and above).
// This function should return a number (final grade). There are four types
// of final grades:

finalGrad = function (grade, project) {
  if (grade > 100 || grade < 0) {
    console.log(`Not accepted`);
    return;
  }
  if ((90 <= grade && grade >= 100) || project >= 10) {
    console.log(`your grade is 100`);
  } else if (75 <= grade && project >= 5) {
    console.log(`your grade is 90`);
  } else if (50 <= grade && project >= 2) {
    console.log(`your grade is 75`);
  } else {
    console.log(`your grade is 0`);
  }
};
finalGrad(100, 12);
console.log(`==================================================
==================================================
==================================================`);

//Array Problems
// Problem 1
// Function that takes a number and return the left most digit of it.

leftDigit = function (number) {
  let numToString = number.toString();
  return parseInt(numToString.charAt(0));
};
console.log(leftDigit(12));
console.log("===============================================");

// Problem 2
// Create a program that takes an array count how many positive numbers,
// negative numbers, even numbers and odd numbers (By same order as
// written) (0 is not counted as positive or negative but it's counted as an
// even number)

sortingArray = function (arr) {
  let positive = 0;
  let negative = 0;
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    }
    if (arr[i] % 2 === 0 || arr[i] === 0) {
      even++;
    } else if (arr[i] % 2 !== 0) {
      odd++;
    }
  }
  return `  positive ${positive}
  negative ${negative}
  even ${even}
  odd ${odd}`;
};
console.log(sortingArray([5, 7, -2, 0, 4, -8, -3, 6]));
console.log("===============================================");

//Problem 3
// Create a function that take array as an input this array may contains
// numbers or strings return the array contains only integers.

returnString = function (arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};
console.log(returnString(["Ahmed", 12, "Mohamed", 34, "Mahmoud", 12, 54]));
console.log("===============================================");

//Problem 4
// Implement slice() function. Function that takes an array and perform the
// same thing that .slice() do
sliceArray = function (mainArray, start, end) {
  let newArray = [];
  for (let i = start; i < end; i++) {
    newArray.push(mainArray[i]);
  }
  return newArray;
};
console.log(sliceArray([1, 2, 3, 4, 5, 6], 0, 3));
console.log("===============================================");

//Problem 5
// Create a function that takes an array of arrays with numbers. Return a
// new single array with the largest numbers of each.

largeNumber = function (mainArray) {
  let lagreNumsArray = [];
  for (let i = 0; i < mainArray.length; i++) {
    let subArray = mainArray[i];
    let largeNum = subArray[0];
    for (let j = 0; j < subArray.length; j++) {
      if (largeNum < subArray[j]) {
        largeNum = subArray[j];
      }
    }
    lagreNumsArray.push(largeNum);
  }
  return lagreNumsArray;
};
console.log(
  largeNumber([
    [1, 2, 3, 4],
    [45, 73, 12],
    [13, 13, 10],
  ])
);
console.log("===============================================");

//Problem 6
// Given a string S. Print the origin string if it's not too long otherwise, print
// special abbreviation.
// Note: The string is called too long, if its length is strictly more than 10
// characters. If the string is too long then you have to print the string in the
// following manner:
// • Print the first character in the string.
// • Print number of characters between the first and the last characters
// • Print the last character in the string

printString = function (str) {
  if (str.length < 10) {
    return str;
  } else if (str.length >= 10) {
    let fChar = str[0];
    let count = str.length - 2;
    let lChar = str[str.length - 1];
    return `${fChar}${count}${lChar}`;
  }
};
console.log(printString("pneumonoultramicroscopicsilicovolcanoconiosis"));
console.log("===============================================");

//Problem 7
// Function takes a string consisting of 4 characters determine if S consists of
// exactly two kinds of characters. Check if the string has exactly two
// different characters in which each of them appear two times in the string

// checkString = function (s) {
//   if (s.length === 4) {
//     for(let i = 0 ; i < s.length ; i++){

//     }

//   } else {
//     return false;
//   }
// };

// problem 8
// You will be given the final shape of an X O game you need to define which
// of the players win (x or o)

// problem 9
// Create a function that takes an array and a character that returns the first
// and the last index of this character.

checkPosition = function (arr, char) {
  let position = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      position.push(i);
    }
  }
  return position;
};
console.log(checkPosition(["h", "e", "l", "l", "o"], "l"));
console.log("===============================================");

// problem 10
// Function gets an array and a number check if this number can be
// obtained by adding some consecutive elements in this array
