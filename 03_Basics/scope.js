//Scope. Scope means world. funciton world, grand-parent world, parent world, child world, global scope means window world.

/* 
//global scope
let b =40;
if(true){
    //block scope
    //var a = 2;
    let b = 3;
    const c = 6;
    console.log("Value: ", b);
    function() {

    }
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// console.log(a);
console.log(b);
// console.log(c);

 */

/* --------------------------------part-2-------------------------------- */
// function one() {
//     const username = "One";
//     function two() {
//         const website = "Two"
//         console.log(username);
//     }
//     // console.log(website);
//     // two();
// }
// one();

// if (true) {
//     //parent scope
//     const username = "Shawon"
//     if (username === "Shawon") {
//         //child scope: child can easily access parent scope
//         const website = " YouTube"
//         console.log(username + website)
//     }
//     // console.log(website);
// }
// // console.log(username);

/* -----------------------interesting------------------ */

addOne(14)
function addOne(num) {//it willn't give you error. Because it couldn't store any variable😎
    return num + 1;
}

addTwo(14)
const addTwo = function (num) {// it will give you error.
    return num + 3;
}