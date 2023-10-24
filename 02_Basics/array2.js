const marvel =["ironman", "antman", "spiderman"];
const dc = ["superman", "wonderwomen", "batman"]
/* 
marvel.push(dc); //output:- ['ironman','antman','spiderman',[ 'superman', 'wonderwomen', 'batman' ]]
console.log(marvel);
console.log(marvel[3][1]);//this way we can get access array(.push method)
 */

/* 
const arrayConcat = marvel.concat(dc); //output:- ['ironman','antman','spiderman','superman','wonderwomen','batman']
console.log(arrayConcat);
 */

/* 
//Most of the coder use this method to concat array
const allHeros = [...marvel, ...dc]; //output:- //output:- ['ironman','antman','spiderman','superman','wonderwomen','batman']
console.log(allHeros);
 */

//Below method we can simplify our complex array
/* 
const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const useAnotherArray = anotherArray.flat(Infinity);
console.log(useAnotherArray); 
*/

console.log(Array.isArray("Shawon"));
console.log(Array.from("Shawon"));
console.log(Array.from({name: "Shawon"})); //output will be empty[]😛

let score1 = 100;
let score2 = 230;
let score3 = 400;
console.log(Array.of(score1,score2,score3));