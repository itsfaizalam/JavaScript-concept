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

console.log(id === anotherId)

const bigNumber = 48264823648223479n  // Javascript automatically store as in BigInt Datatypes and in the value "n" denotes that it is bigInt data type.


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



// This is function to know the datatypes
console.log(typeof bigNumber);


// Reference of the offical resource :- https://262.ecma-international.org/5.1/#sec-11.4.3
