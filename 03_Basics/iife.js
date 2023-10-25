//Immediately Invoked Function Expressions(IIFE)

//Why use IIFE? ans: global scope r pullation theke bachar jonno IIFE use kora hoye.
(function mongoDB(data) {
    //named IIFE
    console.log(`MONGODB CONNECTED`);
})();

((nam)=>{
    console.log(`${nam} DB connected:>`);
})("Shawon")






/* --------------------power of semicolons------------------------- */
//It willn't work because there is no use of semi-colons
/* (function mongoDB(data) {
    console.log(`MONGODB CONNECTED`);
})()

(function ash(bas) {
    console.log(`DB connected:>`);
})() */