//Truthy values: "0", "false", " ", [], {}, function(){}, 
/* --------------------------------------------------------------------------- */
//Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN


// const userEmail = "orib@shawon.com"
// const userEmail = [];
// const userEmail = {};

/* if (userEmail) {
    console.log(`Got user email.`);
} else {
    console.log(`Don't have user email.`);
} */

/* if(userEmail.length === 0){
    console.log(`Array is empty.`);
} */

/* if (Object.keys(userEmail).length === 0) {
    console.log(`Object is empty.`);
}
 */

/* ----------------important--------------------------------------------------------------------- */

//Nullish Coalescing Operator (??): null undefined
/* let value1;
// value1 = 131 ?? 2794
// value1 = null ?? 131
// value1 = undefined ?? 2794
// value1 = undefined ?? null ?? 131 ?? 2794
console.log(value1);
 */
/* -------------------------------------------------------------------------- */
//Terniary Operator
// condition ? true: false

const coffeePrice = 35;
coffeePrice >= 200 ? console.log(`BIG size ${coffeePrice}`) : console.log(`LOW size ${coffeePrice}`);

