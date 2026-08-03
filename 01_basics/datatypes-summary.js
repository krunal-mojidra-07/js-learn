// For Interview And Projects Creations.
// There are two type of data types :1.Primitive and 2.Non primitive(refference datatype)

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const otherId = Symbol('123')

console.log(id === otherId);

const bigNumber = 3215968551354654n



// refference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
    name: "Krunal",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World...");
    
}

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof id);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myFunction);






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non Primitive)
//stack memory

let myYoutubename = "mojidrakrunal8467"

let anothername = myYoutubename

anothername = "Kdmojidra012"

console.log(myYoutubename);
console.log(anothername);

//heap memory

let userOne = {
    email: "user@google.com",
    upi: "user@ylp"
}

let userTwo = userOne

userTwo.email = "kd@google.com"

console.log(userOne.email);
console.log(userTwo.email);
