const accountId = 144553
let accountEmail = "faiz@google.com"
var accountPassword = "12345"
accountCity =   "Kolkata"
let accountState;
// accountId = "2" // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Jaipur"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and punctional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);