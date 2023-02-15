const readLine = require('readline-sync');

let answer = readLine.question("Do you want to hear a funny joke?\nYour answer: ")
console.log(answer);
if (answer=="yes"){
    console.log("Funny joke")
}else{
    console.log("ur lame")
}

let number = readLine.question("give me a number");
if (number%2 == 0){
    console.log("divisible by 2");
}else{
    console.log("not divisible by 2");
}
if (number%6 == 0){
    console.log("divisible by 6");
}else{
    console.log("not divisible by 6");
}

if (number%3 == 0){
    console.log("divisible by 3");
}else{
    console.log("not divisible by 3");
}

if (number%4 == 0){
    console.log("divisible by 4");
}else{
    console.log("not divisible by 4");
}

if (number%5 == 0){
    console.log("divisible by 5");
}else{
    console.log("not divisible by 5");
}

let secret = readLine.question("guess the secret number");
if (secret == 18){
    console.log("you won!");
}else if (secret > 18){
    console.log("your guess was too high");
}if (secret < 18){
    console.log("your guess was too low");
}

let mealprice = Number(readLine.question("enter your meal price"));
let tax = Number((mealprice*0.08).toFixed(2));
let newprice = (`${mealprice+tax}`);
console.log(`new meal price ${newprice}`);
if (mealprice == 0){
    console.log("please enter a value");
}

let mealcost = Number(readLine.question("enter your meal cost"));
let service = readLine.question("rate my service (Service was Good/Service was Bad/Service was Meh)");
if (service == Good){
    console.log(`meal & tip cost: ${(price+price*.2).toFixed(2)}`)
}else if (service == Bad){
    console.log(`meal & tip cost: ${(price+price*.15).toFixed(2)}`)
}else if (service == Meh){
    console.log(`meal & tip cost: ${(price+price*.1).toFixed(2)}`)
}

