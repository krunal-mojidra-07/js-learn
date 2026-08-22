// const instagram = new Object()

const instagramUser = {}

instagramUser.id = "kdm233"
instagramUser.name = "Krunal"
instagramUser.isLoggedIn = false

// console.log(instagramUser);

const regularUser = {
    email: "kdm@test.com",
    fullname: {
        userfullname: {
            firstname: "Krunal",
            lastname: "Mojidra"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj3 = { 5: "c", 6: "d"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "km@test.com"
    },
    {
        id: 1,
        email: "km@test.com"
    },
    {
        id: 1,
        email: "km@test.com"
    }
]

users[1].email

// console.log(instagramUser);
// console.log(Object.keys(instagramUser));
// console.log(Object.values(instagramUser));
// console.log(Object.entries(instagramUser));

// console.log(instagramUser.hasOwnProperty('isLoggedIn'));
// console.log(instagramUser.hasOwnProperty('isLogged'));

const cource = {
    courcename: "JS in hindi",
    price: "149",
    courceInstructor: "hitesh"
}

// console.log(cource.courceInstructor);

const {courceInstructor: instructor} = cource

console.log(instructor);

// json api 

// {
//     "name": "krunal",
//     "courcename": "JS in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {}
]