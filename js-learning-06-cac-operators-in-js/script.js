//==== 4. OPERATORS IN JAVASCRIPT ====//

// Arithmetic Operators
console.log("Arithmetic Operators");
var a = 100;
var b = 10;
console.log("The value of a + b is: ", a + b);
console.log("The value of a - b is: ", a - b)
console.log("The value of a * b is: ", a * b)
console.log("The value of a / b is: ", a / b)

// Assignment Operators
console.log("Assignment Operators");
var c = b;
//c += 2;
//c -= 2;
//c *= 2;
//c /= 2;
console.log(c); //output:10 -> due to var = 10,

// Comparison Operators
console.log("Comparison Operators")
var x = 34;
var y = 54;
console.log(x == y); // output:false due to value of x and y is not equal to.
console.log(x >= y); // output:false due to value of x and y is not greater than equal to.
console.log(x <= y); // outpu:true due to value of x and y is not less than equal to.
console.log(x != y); // output:true due to value of x and y is not equal to.
console.log(x > y); // output:false due to value of x is less than to y.
console.log(x < y); // output:true due to value of x is less thatn to y.

// Logical Operators
console.log("Logical Operators")
// Logical AND Operators
console.log("Logical AND Operators")
/*In this OR logic atleast we need both the conditions should be true then it print true in the following conditions
we have only 1 output true and rest of are false.*/
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// Logical OR Operators
console.log("Logical OR Operators")
/*In this OR logic atleast we need one condition should be true from the both conditions then only it 
prints true in the following conditions we have three true and 1 false output.*/
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// Logical NOT Operators
console.log("Logical NOT Operators")
console.log(!true)
console.log(!false)