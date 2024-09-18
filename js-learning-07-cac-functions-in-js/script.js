//==== 5. FUNCTIONS IN JAVASCRIPT ====//
// DRY = Do Not Repeat Yourself.
console.log("---------------------------")
console.log("5. FUNCTIONS IN JAVASCRIPT")
console.log("---------------------------")

// function avg(a,b){
//     return(a+b)/2;
// }

function avg(a,b){
    c = (a+b)/2;
    return c;
}
c1 = avg(4,6);
c2 = avg(15, 5);
console.log(c1, c2);//output
console.log("\n")

// CONDITIONALS IN JAVASCRIPT
console.log("---------------------------")
console.log("CONDITIONALS IN JAVASCRIPT")
console.log("---------------------------")
// var name = prompt("Please Enter your name.");
// var age = prompt("Please enter you age.");
// console.log('name');


// if-else Ladder
var age = 8;
if (age > 35){
    console.log("Your age is greater than 35!");
}
else if(age > 25){
    console.log("Your age is greater than 25 and smaller than 35;");
}
else if(age > 15){
    console.log("Your age is greater than 15 and smaller than 25;");
}
else if(age > 5){
    console.log("Your age is greater than 5 and smaller than 15;");
}
else{
    console.log("Your kid are infant.");
}
