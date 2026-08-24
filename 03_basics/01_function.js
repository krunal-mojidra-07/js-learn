function sayMyName() {
    console.log("K");
    console.log("R");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("L");
}

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
    
// }

// addTwoNumber(55, 45)

function addTwoNumber(number1, number2) {
    // console.log(number1 + number2);
    // let result = number1 + number2
    return number1 + number2
}

// const result = addTwoNumber(55, 45)
// console.log("Result: ", result);

function loginUserMessage(username = "KD"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Krunal"));
// console.log(loginUserMessage("Krunal"));

function calculateCartPrice(value1, value2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 500, 800, 2000));


const user = {
    username: "Krunal",
    price: 299
}

function handelObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

// handelObject(user)
handelObject({username: "Kd",
    price:499
})

const myNewArray = [100, 200, 651, 8000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 6541, 80000]));
