     //  1. IIFE Immediately Invoked Function Expression)
     async function myIIFE() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("My IIFE function are resolved!");
        }, 1000);
      });
    }
    

    console.log("IIFE (Immediately Invoked Function Expression) are initializing...");
    // 1. IIFE (Immediately Invoked Function Expression) are initializing here ye khud me ek async function hota hai
    (async function main() {
      let val1 = await myIIFE();
      console.log(`1st value:` + val1);
      let val2 = await myIIFE();
      console.log(`2nd value:` + val2);      

      })()