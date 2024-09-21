// 3. Spread Syntax
async function sleep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(45);
      }, 1000);
    });
  }

// creating a function for sum
function mySum(a, b, c){
    return a+b+c
}

  (async function main() { 
    // 3. Spread Syntax are used in process: 3
    let myArr = [1, 4, 6]
    
    console.log("Process1: ");
    console.log(myArr[0] + myArr[1] + myArr[2]) // Process 1 example for doing normal sum
    
    console.log("Process2: ");
    console.log(mySum(myArr[0], myArr[1], myArr[2])) // Process 2 (Same process)
    
    console.log("Process3: ");
    console.log(mySum(...myArr)) // Process 3 (Same Process) // ...myArr ka matlab hota hai iske valu ko khol do ya spread kar do
/*
Process1: 
11

Process2: 
11

Process3: 
11

Note: Process 2 and process 3 same hai bas process 3 me spread syntax use ho raha hai (...myArr) iska matlab hota hai spread kar do yani khol do.

*/


// Speacial case in spread syntax
 const myArr2 = [1, 7, 11]
 const myObj2 = {...myArr2}
 console.log(myObj2)
 // Output {0: 1, 1: 7, 2: 11}
})()