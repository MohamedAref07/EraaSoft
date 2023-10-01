// Task 1 (Buggy Code -> Part 5)
/* Mubashir created an infinite loop! Help him by fixing the code in the code
tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
 */

// Examples
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

// Solution
function printArray(number) {
    var newArray = [];

    for (var i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}
console.log(printArray(6));
console.log(`==============================`);

// Task 2 (Buggy Code -> Part 7)
// Mubashir wants to swap two given numbers!
// It is not returning the right values. Can you help him fix it?
// Solution

function swap(a, b) {
    return [b, a];
}
console.log(swap(100, 200));
console.log(`==============================`);

// Task 3 (The Farm Problem)
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50


// Solution
function animals(chickens, cows, pigs) {
    var legs = chickens * 2 + cows * 4 + pigs * 4;
    return legs;
}
console.log(animals(2, 4, 3));
console.log(`==============================`);

// Task 4 (Using the "&&" Operator)
// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

// Consider a && b:

// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.

// Make a function using the && operator.

// Solution
function checkTrue(a, b) {
    if (a && b) {
        return true;
    } else { return false; }
}
console.log(checkTrue(false, true));
console.log(`==============================`);

// Task 5 (Are the Numbers Equal?)
// Create a function that returns true when num1 is equal to num2; otherwise return false.
function CheckNum(num1, num2) {
    if (num1 === num2) {
        return true;
    } else { return false; }
}
console.log(CheckNum(10, 10));
console.log(CheckNum(5, 10));
console.log(`==============================`);

// Task 6 (Football Points)
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points
function footballPoints(wins, draws, losses) {
    return (wins * 3) + (draws * 1) + (losses * 0);
}
console.log(footballPoints(2, 3, 4));
console.log(`==============================`);

// Task 7 (Convert Hours and Minutes into Seconds)
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function toSecs(hours, minutes) {
    return (hours * 60 * 60) + (minutes * 60);
}
console.log(toSecs(2, 15));
console.log(`==============================`);

// Task 8 (Fix the Expression)
// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.
function isSeven(x) {
    return x == 7 ? true : false;
}
console.log(isSeven(9));
console.log(isSeven(7));
console.log(`==============================`);
// Task 9 (Equality Check)
// In this challenge, you must verify the equality of two different values given the parameters a and b.

// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

// Implement a function that returns true if the parameters are equal, and false if they are not.

function checkEquality(data1, data2) {
    return data1 === data2 ? true : false;
}
console.log(checkEquality(7, '7'));
console.log(checkEquality(7, 7));
console.log(checkEquality(7, true));
console.log(`==============================`);

// Task 10 (Profitable Gamble)
// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function checkBig(prob, prize, pay) {
    if ((prob * prize) > pay) {
        return true;
    } else {
        return false;
    }
}
console.log(checkBig(.2, 50, 9));
console.log(checkBig(.9, 1, 2));
console.log(`==============================`);

// Task 11 (Boolean to String Conversion)
// Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(flag) {
    return String(flag);
}
console.log(boolToString(false));
console.log(boolToString(true));
console.log(`==============================`);

// Task 12 (Using Arrow Functions)
// Create a function that returns the given argument, but by using an arrow function.

// An arrow function is constructed like so: arrowFunc=(/*parameters*/)=>//code here

arrowFunc = (parameter) => parameter;
console.log(arrowFunc('10'));
console.log(arrowFunc(10));
console.log(arrowFunc(true));
console.log(`==============================`);
// Task 13 (Frames Per Second)
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(minutes, fps) {
    return (minutes * 60) * fps;
}
console.log(frames(1, 1));
console.log(frames(10, 25));
console.log(`==============================`);

// Task 14 (Miserable Parody of a Calculator)
function calc(exp) {
    return eval(exp);
}
console.log(calc("49/7*2-3"));
console.log(calc("13+2-5*2"));
console.log(`==============================`);

// Task 15 (Buggy Code (Part 4))
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Mohamed"));
console.log(`==============================`);

//Thank You