//singleton: when object is declared by the constructor then it is called singleton
//object.create








































//object literals
/* const mySum = Symbol("key14")

const JSUser = {
    name: "Shawon",
    "full name": "RI Shawon",
    [mySum]: "key1",//if you declare Symbol then use '[]'
    age: 22,
    location: "Bangladesh",
    email: "shawon@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
} */

/* console.log(JSUser["full name"]);
console.log(JSUser["email"]);
console.log( JSUser[mySum]); */
/* 
JSUser.email = "shawon@chatgpt.com";
// console.log(JSUser["email"]);

// Object.freeze(JSUser);
JSUser.email = "shawon@microsoft.com";
// console.log(JSUser);

JSUser.greeting = function () {
    console.log(`HI Shawon. How was your day?`);
}
JSUser.greetingTWO = function () {
    console.log(`HI Shawon. How was your day?, ${this.name}`);
}

console.log(JSUser.greeting);
console.log(JSUser.greetingTwo); */