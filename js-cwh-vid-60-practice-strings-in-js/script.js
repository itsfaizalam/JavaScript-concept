console.log("------------------------------");
console.log("1. Strings and String in Array");
console.log("------------------------------");

console.log("This is strings tutorials");
let a = "Faiz";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);

console.log("-----------------");
console.log("2. Strings Length");
console.log("-----------------");

console.log(a.length); // here a.lenght is a property not a function

let realName = "Faiz";
let friendName = "Rohan";
console.log(
  "His name is " + realName + " and his friends name is " + friendName,
);

// Template Literals Syntex "`"This symbol is called back ticks
// And when we instert value between backticks symbols then it is called "String interpolation"
console.log(`His name is ${realName} and his friend name is ${friendName}`);

console.log("--------------------------");
console.log("3. Escape Sequence Characters");
console.log("--------------------------");

// wrongName = "Roh"an"
// console.log(wrongName)

// correctName = `Roh"an`
// console.log(correctName)

correctName = "Rohan";
console.log(correctName);

console.log("--------------------");
console.log("4. toUpperCase Function");
console.log("--------------------");
console.log(correctName.toUpperCase());

console.log("--------------------");
console.log("5. toLowerCase Function");
console.log("--------------------");

console.log(correctName.toLowerCase());
console.log(correctName.length); // variable.lenght is a property not a function
console.log(correctName.slice(0, 4)); // output is like this "Roha"
console.log(correctName.slice(2)); // output is like this "han" it excludes 2 characters from starting

console.log("-------------------");
console.log("6. Replace Function");
console.log("-------------------");

let b = "Faiz Bhai";
// let b = "Bhai Faiz Bhai"
console.log(b.replace("Bhai", "Bro")); // output is "Faiz Bro" and if we have more than two occurance of Bhai than it will replaces only first one.

console.log("----------------");
console.log("7. Concatenation");
console.log("----------------");

// concatination and adding multiple value with .concat function
let firstName = "Faiz";
let lastName = "Alam";
let fullName = firstName.concat(lastName, "Shama", "Parveen");
console.log(fullName); // output is : FaizAlamShamaParveen

// concatination and adding only one value with "+" symbol
let fstName = "Faiz";
let secndName = "Alam";
let allName = fstName + secndName;
console.log(allName); // output is : FaizAlam

console.log("---------------------------------------");
console.log("8. Trim Function to Remove White Spaces");
console.log("---------------------------------------");

let tr1m = "   Faiz   Alam";
let tr1mmed = tr1m.trim();
console.log(tr1mmed); // output: Faiz   Alam it removes whitspaces only from begning.
