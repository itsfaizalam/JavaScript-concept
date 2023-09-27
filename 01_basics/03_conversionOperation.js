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
console.log(typeof stringNumber);

// Below notes are tested output to understand the "String" conversions :-
// 33 => 33 (but as a string)
