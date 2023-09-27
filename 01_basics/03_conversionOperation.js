// 01. Number Conversion
//-----------------------
let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// Below notes are tested output to understand the "Number" conversions :-
// "33" => 33
// "33abc" => NaN (Not a Number) but type is still number
// true => 1; false => 0;
// null => 0 (this is actual problem in js 0 is a number)
// undefined => Nan (Not a Number)

// 02. Boolean Conversion
// -----------------------
let isLoggedIn = "faiz"
//let booleanIsLoggedInd = Boolean(isLoggedIn)
//console.log(booleanIsLoggedInd);

// Below notes are tested output to understand the "Boolean" conversions :-
// 1 => true; 0 => false;
// "" => false
// "faiz" => true

// 03. String Conversion
// ----------------------
let someNumber =  33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);

// Below notes are tested output to understand the "String" conversions :-
// 33 => 33 (but as a string)

// ********** OPERATIONS *************

let value = 3
let negValue = -value
//console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3) // Two times multiply sign means its 2 to the power 3.
// console.log(2/3)
// console.log(2%3)  // To show the  remainder of 2 is to 3.

let str1 = "Hello"
let str2 = " Faiz"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // if the first number is string then the output as string
// console.log(1 + 2 + "2"); // if the last number is string then the output number and last on is as string

// console.log((3 + 4) * 5 % 3);

// These are the tricky conversion we should avoid this.
// console.log(true); // output => true
// console.log(+true); // output => 1
// console.log(+""); // output => 0

// Smart way to asign same value to multiple variables but avoid this in production line.
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// console.log(num1 + num2 + num3);


// Postfix and prefix Increment operations
let gameCounter = 100
//gameCounter++;
++gameCounter;
//console.log(gameCounter);


// Example Source link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let x = 3;
const y = x++;

//console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

//console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// Link to study Origianl JS Documentation https://tc39.es/ecma262/
