// 2. Destructuring in Array
async function sleep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(45);
      }, 1000);
    });
  }

  (async function main() { 
  console.log("2. Destructuring in Array")    
     
    let a, b = [2, 3]
    console.log(a, b) // output: undefined [ 2, 3 ]
    
    let [d, e] = [6, 8]
    console.log(d, e) // output: 6 8
    
    let [x, y, ...rest] = [1, 5, 7, 8, 9, 10]; // Destructuring in array are used here
    console.log(x, y, rest); // output: 1 5 [ 7, 8, 9, 10 ]
    

    console.log("3. Destructuring in Object")    
    // 2. Destructuring in Object 
    let myObj = {
        p: 12,
        q: 13,
        r: 14
    }
    let {p, q} = myObj
    console.log("Value of P and Q = " + p, q) // output: Value of P and Q = 12 13 // bassically humne yaha pe 3 objects p,q,r me se bas 2 object pull kiya which is p and q.

    })()