const readLine = require(`readline-sync`)

let x = Number(readLine.question("Give me a number:  "));
let y = Number(readLine.question("Give me another number:  "));
let sum = (`${x+y}`);
console.log(sum);

let m = Number(readLine.question("Give me a number:  "));
let n = Number(readLine.question("Give me another number:  "));
let difference = (`${m-n}`);
console.log(difference);

let o = Number(readLine.question("Give me a number:  "));
let p = Number(readLine.question("Give me another number: "));
let product = (`${o*p}`);
console.log(product)

let q = Number(readLine.question("Give me a number:  "));
let r = Number(readLine.question("Give me another number:  "));
let quotient = (`${q/r}`);
console.log(quotient);

let a = Number(readLine.question("Give me a number:  "));
let b = Number(readLine.question("Give me another number:  "));
let remainder = (`${a%b}`);
console.log(remainder);

let firstname = readLine.question("Enter your first name:  ");
let lastname = readLine.question("Enter your last name:  ");
let greeting =

let stnumber = readLine.question("street number:  ");
let stname = readLine.question("street name:  ");
let sttype = readLine.question("street type (ave, way, st, etc):  ");
let city = readLine.question("city:  ");
let state = readLine.question("state:  ");
let zip = readLine.question("zip code:  ");
console.log(`${stnumber} ${stname} ${sttype}\n${city} ${state} ${zip}`);

