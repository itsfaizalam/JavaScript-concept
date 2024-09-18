console.log("------------------------------------------------------------------------")
console.log("17. Map Method - Creates a new array by performing some operation on each array element")
console.log("------------------------------------------------------------------------")

let mapArr = [1, 13, 5, 7, 11];

// let newMapArr = [];
// for (let index = 0; index < mapArr.length; index++) {
//     const element = mapArr[index];
//     newMapArr.push(element**2)    
// }


// let newMapArr =  mapArr.map((e)=>{
// return e**2
// })


let newMapArr =  mapArr.map((e, index, array)=>{
    return e**2
    })

console.log(newMapArr)
/*
output:
[ 1, 169, 25, 49, 121 ]

first procces with done by for loop and  2nd process with map method.
*/

console.log("------------------------------------------------------------------------")
console.log("18. Filter Method - Filters an array with values that passes a test. Creates a new array")
console.log("------------------------------------------------------------------------")


const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(mapArr.filter(greaterThanSeven)) // output: [ 13, 11 ] // because only  13 and 11 are the greather than from 7


console.log("------------------------------------------------------------------------")
console.log("19. Reduce Method - Reduces an array to a single value")
console.log("------------------------------------------------------------------------") 

console.log("---------")
console.log("Example 1")
console.log("---------")
let arr3 = [1, 2, 3, 4, 5, 6]

const red = (a, b)=>{
    return a+b 
}

console.log(arr3.reduce(red))

console.log("---------")
console.log("Example 2")
console.log("---------")

const numbers = [175, 50, 25];
console.log(numbers.reduce(myFunc))

function myFunc(total, num) {
    return total - num;
  }
  
console.log("---------")
console.log("Example 3")
console.log("---------")

const numbers1 = [15.5, 2.3, 1.1, 4.7];
console.log(numbers1.reduce(getSum, 0))
function getSum(total, num) {
  return total + Math.round(num);
}


console.log("------------------------------------------------------------------")
console.log("20. From Method - The Array.from() method returns an array from any object with a length property.")
console.log("------------------------------------------------------------------") 

let text = "ABCDEFG"
console.log(Array.from(text));

/*
output:
[
  'A', 'B', 'C',
  'D', 'E', 'F',
  'G'
]
*/