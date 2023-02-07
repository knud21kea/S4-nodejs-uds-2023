// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberFloat = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(numberFloat);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherNumberTotal = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
const anotherNumberFloat = anotherNumberTotal.toFixed(2);
console.log(anotherNumberFloat);


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const averageFloat = (one + two + three) / 3;
const averageFloatFive = averageFloat.toFixed(5);
console.log(averageFloatFive);


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letter = letters.charAt(2);
console.log(letter);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const newFact = fact.replace("j", "J");
console.log(newFact);

//
// --------------------------------------
