// singleton
// Object.Create

// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Krunal",
    "full name": "Mojidra Krunal",
    age: 20,
    [mySym]: "myKey1",
    location: "Gandhinagar", 
    email: "krunal@test.com", 
    isLoggedIn: false,
    lastLoginIn: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "Krunal21@yahho.com"

// Object.freeze(JsUser)

JsUser.email = "krunal@google.com"

// console.log(JsUser["email"]);

JsUser.greeting = function() {

    console.log("Hello JS Users");

}

JsUser.greetingTwo = function() {

    console.log(`Hello JS Users, ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
