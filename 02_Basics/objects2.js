// const tinderUser = new Object();//singleton object
const tinderUser = {}//non-singleton object

tinderUser.id = "123gnc"
tinderUser.name="Shawon"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const register = {
    email: "some@google.com",
    fullName: {
        userFullName: {
            firstName: "Shawon",
            lastName: "Orib"
        }
    }
}

// console.log(register.fullName.userFullName.firstName);

const userOne = {
    username1: "Shawon Orib",
    email1: "shawon@google.com"
};

const userTwo = {
    username2: "Rakibul Orib",
    email2: "rakibul@google.com"
};
const userThree = {
    username3: "Islam Orib",
    email3: "orib@google.com"
}

const merceUserData = Object.assign({},userOne, userTwo, userThree);
// console.log(merceUserData);

const all = {...userOne, ...userTwo, ...userThree}
// console.log(all);

//Important methods
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // it will give you a array
console.log(Object.values(tinderUser)); // it will give you a array
console.log(Object.entries(tinderUser)); // it will give you a array
console.log(tinderUser.hasOwnProperty("isLogged"))//To check a object that particular exist or not


