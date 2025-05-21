const accountId = 144553           // cannot be changed 
let accountEmail = "har.sh@gmail.com"
var accountPassword = "12345"          // do not use var
accountCity = "Bareilly"               // prefer not to assign like this
let accountState; 

// accountId = 2 
console.log(accountId);
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
accountEmail= "sharma.harshit1620@gmail.com"
accountPassword = 1242331
accountCity ="Noida"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])



