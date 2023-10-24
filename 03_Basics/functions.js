/* function model: 
function nam (parameter) {
    condition
}
nam(argument) 
*/
/* 
function addTwoNumbers (number1, number2) {
    console.log(number1 + number2);
}
const result = addTwoNumbers(3, 8);
console.log("1Result: ", result);
 */
/* 
//Note: if funtion return something then storage that value and console value easily. 
function multiple(a,b) {
    const rest = a+b;
    console.log("shawon");
    return rest;
}
const res = multiple(6,7)
console.log("Result:", res);
 */
/* 
function loginUserMessage(username = "Someone") {
    if(!username){ // [(username === undefined) = (!username)] 
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in.`;
}
console.log(loginUserMessage("Shawon")); 
*/

/* -------------------------------part-2--------------------------------- */
// function calculateCartPrice(...num1) { //this ... means 'Rest operator'
//     return num1;
// };
// console.log(calculateCartPrice(200,400,800,900));


/* const user = {
    username: "Shawon",
    price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({
    username: "Orib",
    price: 499
}); */

const myNewArray = [200, 400, 500, 100];
function returnSecondValue(getArray) {
    return getArray[3];
};
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2,3,5,7]));