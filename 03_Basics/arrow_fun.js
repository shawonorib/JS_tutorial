const user = {
    username: "Shawon",
    price: 499,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to felo wesite:)`);
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username = "Orib";
// user.welcomeMessage();
// console.log(this);

//normal function
/* function tea() {
    const a = "sha";
    console.log(this.sha);
} */
//arrow function
// const tea = () => {
//     const a = "sha";
//     console.log(this);
// }
// tea();

// const addTwo = (num1, num2)=> num1 + num2;
// const addTwo = (num1, num2)=> (num1 + num2);
const addTwo = (num1, num2)=> ({username: "shawon"});


console.log(addTwo(3,66));