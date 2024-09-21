console.log("-----------------")
console.log("1. Arrays")
console.log("-----------------")

let arr = [1, 2, 3, 4, 5]
// Index   0  1  2  3  4
console.log(arr)
console.log("The lenght of the arrays are " + arr.length)
console.log("-----------------")
console.log("2. Arrays are mutable example")
console.log("-----------------")
arr[0] = 566 // it will update the 0s index of the array so, that mean arrays are mutable but string are not mutable
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])


console.log("-----------------")
console.log("3. String are not mutable example")
console.log("-----------------")

let a = "Faiz"
a[0] = "K"
console.log(a)

console.log("-----------------")
console.log("4. To check Type of arrays")
console.log("-----------------")

console.log(arr, typeof arr)
console.log(a, typeof a)


console.log("-----------------")
console.log("5. Convert Arrays to Strings")
console.log("-----------------")

console.log(arr.toString()) // output: 566,2,3,4,5
// we can identify with its ouput colour if the value is output as other heighlighted color that means it is not string.

console.log("----------------")
console.log("6. Join Method - are joining all the array elements using a seperator in the bellow example we are using and as a seperator")
console.log("----------------")

console.log(arr.join(" and ")) // output : 566 and 2 and 3 and 4 and 5

console.log("-----------------")
console.log("7. Pop Method - removes last element from the array")
console.log("-----------------")

let p = [1, 2, 3, 4, 5, 6]
console.log(p.pop()) // output: 6 // because last element is 6 and 6 is popped out from arrays pop function.

console.log("-----------------")
console.log("8. Push Method - Adds the new element at the end of the array")
console.log("-----------------")

let j = [1, 2, 3, 4, 5, 6]
console.log(j.push(100))
console.log(j.push("Faiz")) // yes we can push any sting values at the end of the arrays  with the help of this push methoud.
console.log(j)
/*
output:
8
[
  1,   2,      3,
  4,   5,      6,
  100, 'Faiz'
]
  // 8 is the total number of arrays element.
  // 100 and 'Faiz' will insert at the end of the arrays.
*/

console.log("-----------------")
console.log("9. Shift Method - Removes first element and returns it")
console.log("-----------------")

let s = [1, 2, 3, 4, 5, 6]
console.log(s.shift())
console.log(s)
/*
output: 
1
[ 2, 3, 4, 5, 6 ]
*/

console.log("-----------------")
console.log("10. Unshift Method - Adds elements to the beginning Returns new array length")
console.log("-----------------")

let us = [1, 2, 3, 4, 5,  6]
console.log(us.unshift("jack"))
console.log(us)

/*
output:
7
[
  'jack', 1,
  2,      3,
  4,      5,
  6
]
*/
/*
Things to Remember:-
unshift (Add element to the beginning)  <------->   Push (Add new element at last)
shift (Remove first Element)            <------->   Pop(Remove Last Element)
*/

console.log("-----------------")
console.log("11. Delete operator - Arrays value can be deleted using this operator")
console.log("-----------------")

let de = [1, 2, 3, 4, 5]
delete de[4]
console.log(de) // output: [ 1, 2, 3, 4, <1 empty item> ]
console.log(de.length)

console.log("-----------------")
console.log("12. Concat Method - used to join arrays to the given arrays")
console.log("-----------------")

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]

console.log(a1.concat(a2, a3))
/*
output:
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]

// concat will return a new arrays with the combination of a1, a2, a3
*/

console.log("-----------------")
console.log("13. Sort Method - used to sort an array apphabetically")
console.log("-----------------")

let sr = [7, 9, 8]
console.log(sr.sort()) // output: [ 7, 8, 9 ]

/* Important: Sort method takes an optional compare function. If this function is provided as the first 
argument the sort () funcion will consider these values (the values returned from the compare function)
as the basis of sorting.
*/

console.log("-----------------")
console.log("14. Splice Method - The splice() method adds or removes array elements.")
console.log("-----------------")

let spl = [1, 2, 3, 4 , 5]
console.log(spl.splice(1, 4))
console.log(spl)
console.log(spl.splice())
/*
output:
[ 2, 3, 4, 5 ]
[ 1 ]
*/

// one more example 
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"]

// At position 2, add "Lemon" and "Kiwi"
fruits.splice(2, 0, "Lemon", "Kiwi")
console.log(fruits)
/*
output:
[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

Acctully is line me :- fruits.splice(2, 0, "Lemon", "Kiwi")
2, 0 ka matlab ye hai ki 2 new fruit ko add kar do and uske badly zero ko remove karo. (matlab remove nahi karna)
agar 0 ke jaga 1 hota to lemon and kiwi add hojata aur apple remove ho jata.
*/


console.log("----------------")
console.log("15. Slice Method - Array.slice() returns selected array elements as a new array:")
console.log("-----------------")

let frt = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);
console.log(citrus)

/*
output:
[ 'Orange', 'Lemon' ]

// Important Notes : Isme 1, 3 ka matlab ye hua array ke idex 1 se start karo and array ke index 3 tak jao but index 3 
ko include mat karo 2 tak hi include karo, isliye ouput me orance and lemon aaya hai suppose 1, 3 ke jagah hum 1, 4 
choose karte toh 'Apple' bhi add ho jata output: [ 'Orange', 'Lemon', 'Apple' ] 
*/

console.log("----------------")
console.log("16. The reverse() method reverses the order of the elements in an array.")
console.log("    The reverse() method overwrites the original array.")
console.log("-----------------")

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.reverse()); // output: [ 'Mango', 'Apple', 'Orange', 'Banana' ]


console.log("-----------------")
console.log("17. Map Method - Creates a new array by performing some operation on each array element")
console.log("-----------------")

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

console.log("-----------------")
console.log("18. Filter Method - Filters an array with values that passes a test. Creates a new array")
console.log("-----------------")


const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(mapArr.filter(greaterThanSeven)) // output: [ 13, 11 ] // because only  13 and 11 are the greather than from 7


console.log("-----------------")
console.log("19. Reduce Method - Reduces an array to a single value")
console.log("----------------") 

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


console.log("-----------------")
console.log("20. From Method - The Array.from() method returns an array from any object with a length property.")
console.log("----------------") 

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