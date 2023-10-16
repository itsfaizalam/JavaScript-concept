// 1. # Primmitive datatypes
// There are 7 types of primitive datatypes :- String, Number, Boolean, null, undefined, Symbol, BigInt

//Exaple:-
const score = 100
const scoreValue = 100.3
const IsLoggedIn = false
const outSideTemp = null
let userEmail; // its datatype undefined
//let userEmail = undefined // it is also undefined data type
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId, "- Here is showing false due to Symbol datatypes value are not same.")
const bigNumber = 48264823648223479n  // Javascript automatically store as in BigInt Datatypes and in the value "n" denotes that it is bigInt data type.

console.log(typeof score, '- Here is  the score Datatype.' )
console.log(typeof scoreValue, '- Here is  the scoreValue Datatype.' )
console.log(typeof IsLoggedIn, '- Here is  the IsLoggedIn Datatype.' )
console.log(typeof outSideTemp, '- Here is  the outSideTemp Datatype.' )
console.log(typeof userEmail, '- Here is  the userEmail Datatype.' )
console.log(typeof id, '- Here is  the id Datatype.' )
console.log(typeof anotherId, '- Here is  the anotherId Datatype.' )
console.log(typeof bigNumber, '- Here is  the bigNumber Datatype.' )



// 2. # Non Primitive datatypes or Reference type.
// There are three basic datatypes in Non primitive datatypes or Reference type:-
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] 
let myObj = {
    name: "Faiz",
    age: 28,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof heros, '- Here is  the heros Datatype.' )
console.log(typeof myObj, '- Here is  the myObj Datatype.' )
console.log(typeof myFunction, '- Here is  the myFunction Datatype.' )

// Reference of the offical resource :- https://262.ecma-international.org/5.1/#sec-11.4.3
