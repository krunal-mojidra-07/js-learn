const user = {
    username: "Krunal",
    price: 999,

    wellcomeMessage: function(){
        console.log(`${this.username} , Welcome into Website`);
        console.log(this);
        
    }
}

// user.wellcomeMessage()
// user.username = "Sam"
// user.wellcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Krunal"
//     console.log(this.username);
    
// }

// chai()

// const chai = function() {
//     let username = "Krunal"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "Krunal"
    // console.log(this.username);
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Krunal"})
    


console.log(addTwo(3,4));


const myArray = [1, 5, 564, 645 ]

// myArray.forEach( )