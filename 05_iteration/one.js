//Here discussion Loops

/* for (initial; condition check; increment/decrement) {
    body
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

for (let i = 0; i <5; i++) {
    const element = i;
    if(element == 3) {
        console.log(`${i} is wonderful number:)`);
    }
    console.log(element);
    
}
// console.log(element);

for (let i = 0; i <=3; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=5; j++) {
        console.log(`Outer loop value: ${i} and inner loop value: ${j}`);
    }
    
}