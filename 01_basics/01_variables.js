const accountId = 546789;
var accountEmail = "krunal@google.com";
let accountpassword = "12345";
accountCity = "Ahmedabad";
let accountState;

// accountId = 123456;
/*
    not to prefer var,
    because of issue in block scope and function scope
*/

accountCity = "Mumbai";
accountEmail = "km@km.com";
accountpassword = "54321";

console.table([accountId, accountEmail, accountpassword, accountCity, accountState])