//==== 1. WAYS TO PRINT IN JAVASCRIPT ====//
console.log("1. WAYS TO PRINT IN JAVASCRIPT")
console.log("Hello world.");
//alert("ME");
//document.write("This is document dot write to wirte something directly on your current document by JS");

//==== 2. LIST OF JAVASCRIPT CONSOLE API's ====//
console.log("2. LIST OF JAVASCRIPT CONSOLE API's");
console.log("Hello world.", 4 + 6, "Another log.");
console.warn("This is console dot warning.");
console.error("This is an error.");
//console.clear("This is console.clear function for clear the console.");
//console.assert(4==(8-6)) //output: Assertion failed: console.assert // due to it has wrong conditions.
//console.assert(4==(8-4)) //output: display noting // due to it has right conditions.

//==== 3. JAVASCRIPT VARIABLES ====//
console.log("3. JAVASCRIPT VARIABLES")
// i. What are variables? - Containers to store data values.
var number1 = 34;
var number2 = 56;
console.log(number1 + number2)

//==== 4. DATATYPES IN JAVASCRIPT ====//
console.log("4. DATATYPES IN JAVASCRIPT")
// Numbers
console.log("Numbers")
var num1 = 445;
var num2 = 56.76;

// String
console.log("String")
var str1 = "This is a string";
var str2 = "This is also a string";

// Objects
console.log("Objects");
var marks = {
  Firoz: 98,
  Faruque: 65,
  Faiz: 85,
  Shamim: 72
}
console.log(marks);

// Booleans
console.log("Booleans");
var a = true;
var b = false;
console.log(a, b);

// Undefined
//var und = undefined;
var und;
console.log(und);

// Null
console.log("Null");
var n = null;
console.log(n)

// Symbol
//Symbol('')

// Arrays
var arr = [1, 2, "String", 4, 5, 6]
console.log(arr)
console.log(arr[0], arr[1], arr[2], arr[5])

/*At a very high level, there are two types of data types in JavaScript.
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Refrence data types.
*/

//==== 5. OPERATORS IN JAVASCRIPT ====//
console.log("5. OPERATORS IN JAVASCRIPT");
// Arithmetic Operators
var a = 100;
var b = 10;
console.log("The value of a + b is: ", a + b);
console.log("The value of a - b is: ", a - b)
console.log("The value of a * b is: ", a * b)
console.log("The value of a / b is: ", a / b)

// Assignment Operators
var c = b;
//c += 2;
//c -= 2;
//c *= 2;
//c /= 2;
console.log(c); //output:10 -> due to var = 10,

// Comparison Operators

var x = 34;
var y = 54;
console.log(x == y); // output:false due to value of x and y is not equal to.
console.log(x >= y); // output:false due to value of x and y is not greater than equal to.
console.log(x <= y); // outpu:true due to value of x and y is not less than equal to.
console.log(x != y); // output:true due to value of x and y is not equal to.
console.log(x > y); // output:false due to value of x is less than to y.
console.log(x < y); // output:true due to value of x is less thatn to y.

// Logical Operators
// Logical AND Operators
console.log("----Logical AND Operators----");
/*In this OR logic atleast we need both the conditions should be true then it print true in the following conditions
we have only 1 output true and rest of are false.*/
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Logical OR Operators
console.log("----Logical OR Operators----");
/*In this OR logic atleast we need one condition should be true from the both conditions then only it 
prints true in the following conditions we have three true and 1 false output.*/
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical NOT Operators
console.log("----Logical NOT Operators----");
console.log(!true)
console.log(!false)