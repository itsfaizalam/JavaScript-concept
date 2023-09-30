// 01. Comparison Error Investigation study
//-----------------------

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // Output => false
// console.log(null == 0); // Output => false
// console.log(null >= 0); // Output => true

// console.log(undefined > 0); // Output => false
// console.log(undefined == 0); // Output => false
// console.log(undefined >= 0); // Output => false

// 02. Comparison Error Investigation study for "==="
//--------------------------------------------------
console.log("2" == 2); // Output => true (due to its done normal conversion)
console.log("2" === 2); // Output => false (In this condition not only checking numbers but checking data type as well.)
